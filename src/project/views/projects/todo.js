import React from 'react';
import markdown from '../../../utilities/markdown';
import markdownFile from './todo.md';

const result = markdown.render(markdownFile);

export default ({cardBackground}) => (
  <div className="active project-detail" style={cardBackground}>
    <button className="back" title="返回">
      <span className="fa fa-stack">
	<i className="fa fa-square-o fa-stack-2x"></i>
	<i className="fa fa-arrow-left fa-stack-1x"></i>
      </span>
    </button>
    <h4 className="title">TODO 应用</h4>
    <div className="markdown-body">
      <div className="markdown-inner" dangerouslySetInnerHTML={{__html: result}}>
      </div>
    </div>
  </div>
);

