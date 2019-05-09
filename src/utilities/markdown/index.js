import MarkdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';

import 'github-markdown-css/github-markdown.css';

const markdown = new MarkdownIt({
  typographer: true,
  linkify: true
});

markdown
  .use(markdownItAttrs);

export default markdown;

