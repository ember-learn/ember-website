import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import hljs from 'highlightjs';
import markdownit from 'markdown-it';

const MarkdownIt = markdownit({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`;
      } catch (err) {
        // console.log('Error highlighting', lang, err);
      }
    }

    return ''; // use external default escaping
  }
});

export default Component.extend({
  renderedText: computed('text', function() {
    return htmlSafe(MarkdownIt.render(this.text));
  })
});
