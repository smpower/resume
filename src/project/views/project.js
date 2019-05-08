import React, { Component } from 'react';
import store from '../../store/';
import Todo from './projects/todo';
import { actions as projectDetailActions } from '../../store/projectDetail/';

import portfolioTodo from './images/portfolio_todo.png';
import './project.scss';

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
    const { card, projectDetail } = store.getState();
    const { cardBackground } = store.getState().style;

    return (
      <div className={card.isPortfolioVisible ? "card portfolio active" : "card portfolio"}>
	<span className="line"></span>
	<div className="content" style={cardBackground}>
	  <div className="header">
	    <h2>项目 PROJECT</h2>
	    <hr />
	  </div>
	  <div className="card-part portfolio-collection">
	    <div className="portfolio-item">
	      <div className="item-image">
		<img src={portfolioTodo} alt="TODO 应用" />
	      </div>
	      <div className="item-inner">
		<h5>
		  <button onClick={this.handleClick('todo')}>TODO 应用</button>
		</h5>
		<hr />
		<p>
		  <a
		    href="https://github.com/smpower/todo_web/"
		    target="_blank"
		    rel="noopener noreferrer"
		  >查看源代码</a>
		</p>
	      </div>
	    </div>
	  </div>
	</div>
	<Todo 
	  cardBackground={cardBackground}
	  projectDetail={projectDetail}
	/>
      </div>
    );
  }
}

export default Project;

