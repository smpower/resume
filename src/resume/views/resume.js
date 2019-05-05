import React, { Component } from 'react';
import store from '../../store/';

import './resume.scss';

class Resume extends Component {
  render() {
    const { card } = store.getState();
    const { cardBackground } = store.getState().style;

    return (
      <div className={card.isResumeVisible ? "card resume active" : "resume"}>
	<span className="line"></span>
	<div className="content" style={cardBackground}>
	  <div className="header">
	    <h2>简历 RESUME</h2>
	    <hr />
	  </div>
	  <div className="download-resume">
	    <a href="#" alt="download resume">下载我的简历</a>
	  </div>
	  <div className="education">
	    <h3>
	      <i className="icon-education fa fa-university"></i>
	      教育经历
	    </h3>
	    <div className="education-box">
	      <h4>艺术设计</h4>
	      <span className="intro">2016 年 7 月毕业于滨州学院（普通全日制本科）</span>
	      <hr />
	      <ol className="education-intro">
		<li>
		  <span className="date">2016/5</span>
		  <span className="text">学科竞赛专业组一等奖</span>
		</li>
		<li>
		  <span className="date">2015/9</span>
		  <span className="text">优秀学生、一等奖学金</span>
		</li>
		<li>
		  <span className="date">2014/6</span>
		  <span className="text">系宣传部委员、二等奖学金</span>
		</li>
		<li>
		  <span className="date">2013/9</span>
		  <span className="text">优秀学生、一等奖学金、国家励志奖学金、学科竞赛专业组一等奖</span>
		</li>
	      </ol>
	    </div>
	  </div>
	</div>
      </div>
    );
  }
}

export default Resume;

