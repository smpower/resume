import React from 'react';
import { markdown } from '../../../utilities/';
import markdownFile from './todo.md';

const result = markdown.render(markdownFile);

export default ({projectDetail}) => (
  <div className="markdown-body">
    <div className="markdown-inner" dangerouslySetInnerHTML={{__html: result}}>
    </div>
  </div>
);

