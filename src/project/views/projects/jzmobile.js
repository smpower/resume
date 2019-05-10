import React from 'react';
import { markdown } from '../../../utilities/';
import markdownFile from './jzmobile.md';

const result = markdown.render(markdownFile);

export default () => (
  <div className="markdown-body">
    <div className="markdown-inner" dangerouslySetInnerHTML={{__html: result}}>
    </div>
  </div>
);

