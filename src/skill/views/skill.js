import React, { Component } from 'react';
import store from '../../store/';

import './skill.scss';

class Skill extends Component {
  render() {
    const { card } = store.getState();
    const { cardBackground } = store.getState().style;

    return (
      <div className={card.isSkillVisible ? "card skill active" : "card skill"}>
	<span className="line"></span>
	<div className="content" style={cardBackground}>
	  <div className="header">
	    <h2>技能 SKILL</h2>
	    <hr />
	  </div>
	  <div className="card-part code-skills">
	    <h4><i className="icon-code fa fa-code"></i>编码技能</h4>
	    <hr />
	    <div className="skill-box">
	      <div className="skill-part html-css">
	        <span className="good"></span>
	        <span className="fluent"></span>
		<span className="text">HTML5 & CSS3</span>
		<span className="percent">85%</span>
	      </div>
	      <div className="skill-part javascript">
	        <span className="good"></span>
	        <span className="fluent"></span>
		<span className="text">JavaScript / ES6</span>
		<span className="percent">80%</span>
	      </div>
	      <div className="skill-part react">
	        <span className="good"></span>
	        <span className="fluent"></span>
		<span className="text">React (React-Router & Redux)</span>
		<span className="percent">80%</span>
	      </div>
	      <div className="skill-part webpack">
	        <span className="good"></span>
	        <span className="fluent"></span>
		<span className="text">Webpack</span>
		<span className="percent">60%</span>
	      </div>
	      <div className="skill-part less">
	        <span className="good"></span>
	        <span className="fluent"></span>
		<span className="text">Less</span>
		<span className="percent">85%</span>
	      </div>
	      <div className="skill-part bootstrap">
	        <span className="good"></span>
	        <span className="fluent"></span>
		<span className="text">Bootstrap</span>
		<span className="percent">70%</span>
	      </div>
	      <div className="skill-part git">
	        <span className="good"></span>
	        <span className="fluent"></span>
		<span className="text">Git</span>
		<span className="percent">88%</span>
	      </div>
	      <div className="skill-part docker">
	        <span className="good"></span>
	        <span className="fluent"></span>
		<span className="text">Docker</span>
		<span className="percent">40%</span>
	      </div>
	      <div className="skill-part express">
	        <span className="good"></span>
	        <span className="fluent"></span>
		<span className="text">Express</span>
		<span className="percent">25%</span>
	      </div>
	      <div className="skill-part mysql">
	        <span className="good"></span>
	        <span className="fluent"></span>
		<span className="text">MySQL</span>
		<span className="percent">20%</span>
	      </div>
	    </div>
	  </div>
	</div>
      </div>
    );
  }
}

export default Skill;

