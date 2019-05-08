import React from 'react';
import store from '../../../store/';
import { actions as projectDetailActions } from '../../../store/projectDetail/';
import markdown from '../../../utilities/markdown';
import markdownFile from './todo.md';

const result = markdown.render(markdownFile);

export default ({cardBackground, projectDetail}) => (
  <div
    className={projectDetail.todo ? 'active project-detail' : 'project-detail'}
    style={cardBackground}
  >
    <button className="back" title="返回" onClick={() => {
      store.dispatch(projectDetailActions.unvisible('todo'));
    }}>
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

