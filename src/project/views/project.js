import React, { Component } from 'react';
import store from '../../store/';
import { actions as projectDetailActions } from '../../store/projectDetail/';
import { Boundle } from '../../utilities/';

import './project.scss';

// Todo 应用
const Todo = props => (
  <Boundle load={() => import('./projects/todo.js')}>
    {Todo => <Todo {...props} />}
  </Boundle>
);

// 以萨技术融合系统
const YsFusion = props => (
  <Boundle load={ () => import('./projects/ysfusion.js') }>
    { YsFusion => <YsFusion {...props} /> }
  </Boundle>
);

// 以萨技术人脸识别系统
const YsFace = props => (
  <Boundle load={ () => import('./projects/ysface.js') }>
    { YsFace => <YsFace {...props} /> }
  </Boundle>
);

// 橘子情感员工管理系统
const JzUms = props => (
  <Boundle load={ () => import('./projects/jzums.js') }>
    {JzUms => <JzUms {...props} />}
  </Boundle>
);

// 小鱼情感用户留言管理系统
const XyUcms = props => (
  <Boundle load={ () => import('./projects/xyucms.js') }>
    {XyUcms => <XyUcms {...props} />}
  </Boundle>
);

// 小鱼情感 PC 端门户网站
const XyPc = props => (
  <Boundle load={ () => import('./projects/xypc.js') }>
    { XyPc => <XyPc {...props} /> }
  </Boundle>
);

// 小鱼情感移动端门户网站
const XyMobile = props => (
  <Boundle load={ () => import('./projects/xymobile.js') }>
    { XyMobile => <XyMobile {...props} /> }
  </Boundle>
);

// 橘子情感移动端门户网站
const JzMobile = props => (
  <Boundle load={ () => import('./projects/jzmobile.js') }>
    { JzMobile => <JzMobile {...props} /> }
  </Boundle>
);

// 橘子情感 PC 端门户网站
const JzPc = props => (
  <Boundle load={ () => import('./projects/jzpc.js') }>
    { JzPc => <JzPc {...props} /> }
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

    for (const key in projectDetail) {
      if (projectDetail[key]) isProjectDetailActived = true;
    }

    return (
      <div 
	className={
	  card.isPortfolioVisible ? "card portfolio active" : "card portfolio"
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
		let name = '';
		for (const key in projectDetail) {
		  if (key === item.project && projectDetail[key]) {
		    name = item.name;
		  }
		}
		return name;
	      })
	    }
	  </h4>
	  {
	    projectDetail.todo ? <Todo /> : null
	  }
	  {
	    projectDetail.ysfusion ? <YsFusion /> : null
	  }
	  {
	    projectDetail.ysface ? <YsFace /> : null
	  }
	  {
	    projectDetail.jzums ? <JzUms /> : null
	  }
	  {
	    projectDetail.xyucms ? <XyUcms /> : null
	  }
	  {
	    projectDetail.xypc ? <XyPc /> : null
	  }
	  {
	    projectDetail.xymobile ? <XyMobile /> : null
	  }
	  {
	    projectDetail.jzmobile ? <JzMobile /> : null
	  }
	  {
	    projectDetail.jzpc ? <JzPc /> : null
	  }
        </div>
      </div>
    );
  }
}

export default Project;

