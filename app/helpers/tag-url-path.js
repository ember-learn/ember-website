import { helper } from '@ember/component/helper';

export function tagUrlPath([url]/*, hash*/) {
  let pathIndex = url.indexOf('tags');

  return url.slice(pathIndex);
}

export default helper(tagUrlPath);
