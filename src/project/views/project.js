import React, { Component, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Switch, Route, Link } from 'react-router-dom';
import store from '../../store/';
import Todo from './projects/todo';

import portfolioTodo from './images/portfolio_todo.png';

import './project.scss';

class Project extends Component {
  render() {
    const { card } = store.getState();
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
		  <Link 
		    to="/project/todo"
		  >TODO 应用</Link>
		</h5>
		<hr />
		<p>
		  <a href="#">查看源代码</a>
		</p>
	      </div>
	    </div>
	  </div>
	</div>
      </div>
    );
  }
}

export default Project;

