import React, { Component } from 'react';
import store from '../../store/';
import { actions as projectDetailActions } from '../../store/projectDetail/';
import { Boundle } from '../../utilities/';

import projectTodo from './images/project_todo.png';
import projectJzUms from './images/project_jzums.png';
import './project.scss';

const Todo = props => (
  <Boundle load={() => import('./projects/todo.js')}>
    {Todo => <Todo {...props} />}
  </Boundle>
);

const JzUms = props => (
  <Boundle load={() => import('./projects/jzums.js')}>
    {JzUms => <JzUms {...props} />}
  </Boundle>
);

class Project extends Component {
  constructor() {
    super(...arguments);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(target) {
    return function(event) {
      store.dispatch(projectDetailActions.visible(target));
    }
  }

  render() {
    const { card, projectDetail, projectCollection } = store.getState();
    const { cardBackground } = store.getState().style;
    let isProjectDetailActived = false;
    let projectDetailTitle = '';

    for (const key in projectDetail) {
      if (projectDetail[key]) isProjectDetailActived = true;
    }

    return (
      <div 
	className={
	  card.isPortfolioVisible ? "card portfolio active" : "card portfolio"
	}
	style={
	  isProjectDetailActived ? {overflowY: 'hidden'} : {overflowY : 'auto'}
	}
      >
	<span className="line"></span>
	<div className="content" style={cardBackground}>
	  <div className="header">
	    <h2>项目 PROJECT</h2>
	    <hr />
	  </div>
	  <div className="card-part portfolio-collection">
	    {
	      projectCollection.map((item, index) => (
		<div className="portfolio-item" key={index}>
		  <div className="item-image">
		    <img src={item.backgroundImage} alt={item.name} />
		  </div>
		  <div className="item-inner">
		    <h5>
		      <button onClick={this.handleClick(item.project)}>{item.name}</button>
		    </h5>
		    <hr />
		    {
		      item.isSourceContained ? (
			<p>
			  <a
			    href={item.source}
			    target="_blank"
			    rel="noopener noreferrer"
			  >查看源代码</a>
			</p>
		      ) : null
		    }
		  </div>
		</div>
	      ))
	    }
	  </div>
	</div>
        <div
          className={isProjectDetailActived ? 'active project-detail' : 'project-detail'}
          style={cardBackground}
        >
          <button className="back" title="返回" onClick={() => {
            for (const key in projectDetail) {
             if (projectDetail[key]) {
               store.dispatch(projectDetailActions.unvisible(key));
             }
            }
          }}>
            <span className="fa fa-stack">
             <i className="fa fa-square-o fa-stack-2x"></i>
             <i className="fa fa-arrow-left fa-stack-1x"></i>
            </span>
          </button>
	  <h4 className="title">
	    {
	      projectCollection.map((item, index) => {
		for (const key in projectDetail) {
		  if (key === item.project && projectDetail[key]) {
		    return item.name; 
		  }
		}
	      })
	    }
	  </h4>
	  {
	    projectDetail.todo ? <Todo /> : null
	  }
	  {
	    projectDetail.jzums ? <JzUms /> : null
	  }
        </div>
      </div>
    );
  }
}

export default Project;

