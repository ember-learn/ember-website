/**
 * Generates JSON API data files from markdown content in the data/ directory.
 * Replaces the broccoli-static-site-json based content-data-generator addon.
 */
import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { join, basename, extname } from 'node:path';
import { existsSync } from 'node:fs';

const ROOT = new URL('..', import.meta.url).pathname;

/**
 * Parse YAML-like frontmatter from a markdown file.
 * Handles simple key: value pairs, arrays, and quoted strings.
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { attributes: {}, body: content };

  const body = content.slice(match[0].length).trim();
  const attrs = {};
  const lines = match[1].split('\n');
  let currentKey = null;
  let inArray = false;

  for (const line of lines) {
    const trimmed = line.trimEnd();

    // Array item
    if (inArray && /^\s+-\s+/.test(trimmed)) {
      const value = trimmed.replace(/^\s+-\s+/, '').trim();
      attrs[currentKey].push(parseValue(value));
      continue;
    }

    // Key: value pair
    const kvMatch = trimmed.match(/^(\w[\w-]*):\s*(.*)/);
    if (kvMatch) {
      const [, key, rawValue] = kvMatch;
      currentKey = key;
      inArray = false;

      if (rawValue === '' || rawValue === undefined) {
        // Could be a multi-line value or empty
        attrs[key] = '';
      } else {
        const parsed = parseValue(rawValue);
        attrs[key] = parsed;
      }
      continue;
    }

    // Indented array start
    if (currentKey && /^\s+-\s+/.test(trimmed)) {
      if (!Array.isArray(attrs[currentKey])) {
        attrs[currentKey] = [];
      }
      inArray = true;
      const value = trimmed.replace(/^\s+-\s+/, '').trim();
      attrs[currentKey].push(parseValue(value));
    }
  }

  return { attributes: attrs, body };
}

function parseValue(raw) {
  if (raw === 'true') return true;
  if (raw === 'false') return false;
  if (raw === 'null') return null;
  // Remove surrounding quotes
  if (/^['"].*['"]$/.test(raw)) {
    return raw.slice(1, -1);
  }
  // Number
  if (/^\d+(\.\d+)?$/.test(raw)) {
    return Number(raw);
  }
  return raw;
}

// Nested object/map value (e.g., image with src/alt)
function parseNestedValue(lines, startIdx) {
  const result = {};
  let i = startIdx;
  while (i < lines.length) {
    const line = lines[i];
    if (/^\s+\w/.test(line)) {
      const m = line.match(/^\s+(\w[\w-]*):\s*(.*)/);
      if (m) {
        result[m[1]] = parseValue(m[2]);
      }
      i++;
    } else {
      break;
    }
  }
  return { value: result, endIdx: i };
}

const collections = [
  {
    type: 'showcase',
    contentFolder: 'data/showcase',
    attributes: ['name', 'image', 'repository', 'demo', 'features'],
  },
  {
    type: 'user',
    contentFolder: 'data/user',
    attributes: ['name', 'image', 'url', 'inactive', 'added', 'featured'],
  },
  {
    type: 'team-member',
    contentFolder: 'data/team-member',
    attributes: [
      'name',
      'first',
      'last',
      'bluesky',
      'github',
      'mastodon',
      'social',
      'twitter',
      'image',
      'teams',
      'added',
    ],
  },
  {
    type: 'meetup',
    contentFolder: 'data/meetup',
    attributes: ['location', 'url', 'lat', 'lng', 'organizers', 'area'],
  },
  {
    type: 'tomster',
    contentFolder: 'data/tomster',
    attributes: ['title', 'url', 'date', 'image', 'tags'],
  },
  {
    type: 'sponsor',
    contentFolder: 'data/sponsor',
    attributes: ['name', 'url', 'image', 'start', 'end', 'order'],
  },
  {
    type: 'initiative-sponsor',
    contentFolder: 'data/initiative-sponsor',
    attributes: ['name', 'url', 'image', 'tier', 'order'],
  },
  {
    type: 'feature',
    contentFolder: 'data/feature',
    attributes: [
      'name',
      'summary',
      'status',
      'statusText',
      'availability',
      'resources',
      'champions',
    ],
  },
  {
    type: 'project',
    contentFolder: 'data/project',
    attributes: [
      'name',
      'baseFileName',
      'filter',
      'repo',
      'lastRelease',
      'channel',
      'date',
      'changelogPath',
      'debugFileName',
      'ignoreFiles',
    ],
  },
];

async function getMarkdownFiles(dir, prefix = '') {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      const subFiles = await getMarkdownFiles(fullPath, prefix ? `${prefix}/${entry.name}` : entry.name);
      files.push(...subFiles);
    } else if (entry.name.endsWith('.md')) {
      files.push({ path: fullPath, id: prefix ? `${prefix}/${basename(entry.name, extname(entry.name))}` : basename(entry.name, extname(entry.name)) });
    }
  }
  return files;
}

async function processCollection({ type, contentFolder, attributes }) {
  const folder = join(ROOT, contentFolder);
  if (!existsSync(folder)) {
    console.warn(`Warning: ${folder} does not exist, skipping ${type}`);
    return;
  }

  const files = await getMarkdownFiles(folder);
  const allData = [];

  for (const file of files) {
    const content = await readFile(file.path, 'utf-8');
    const { attributes: attrs, body } = parseFrontmatter(content);
    const id = file.id;

    const filteredAttrs = {};
    for (const attr of attributes) {
      if (attr in attrs) {
        filteredAttrs[attr] = attrs[attr];
      }
    }

    const record = {
      type,
      id: attrs.id?.toString() ?? id,
      attributes: {
        ...filteredAttrs,
        content: body || undefined,
      },
    };

    allData.push(record);

    // Write individual record
    const recordPath = join(ROOT, 'public', 'data', type, `${record.id}.json`);
    await mkdir(join(recordPath, '..'), { recursive: true });
    await writeFile(
      recordPath,
      JSON.stringify({ data: record }, null, 2)
    );
  }

  // Write "all" collection
  const collectionDir = join(ROOT, 'public', 'data', type);
  await mkdir(collectionDir, { recursive: true });
  await writeFile(
    join(collectionDir, 'all.json'),
    JSON.stringify({ data: allData }, null, 2)
  );

  console.log(`Generated ${allData.length} ${type} records`);
}

async function main() {
  console.log('Generating content data...');
  for (const collection of collections) {
    await processCollection(collection);
  }
  console.log('Done!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
