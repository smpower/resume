import React, { Component } from 'react';
import store from '../../store/';

import './resume.scss';

const workExperences = [
  {
    company: '青岛数据技术股份有限公司',
    date: '2019.01-2019.03',
    department: '系统开发维护',
    position: '前端开发工程师',
    description: '在该公司，作为技术团队成员，主要工作为：维护、迭代现有项目；维护、开发公共组件库；参与研发融合系统。'
  },
  {
    company: '青岛橘子创想文化传播有限公司',
    date: '2017.07-2018.12',
    department: '技术部',
    position: '前端开发工程师',
    description: '在该公司，作为前端负责人主要负责的工作有：负责总公司和分公司门户网站和移动端架构相关工作；推动主要的技术决策，并最终落地实现；内部管理系统中，确定前后端开发模式，包括前后端彻底分离、功能前端化等；提出性能调优的建议并实施；确保上级领导决定被有效实现和贯彻。'
  }
];

const resumeDownloadUrl = 'https://raw.githubusercontent.com/smpower/resume/master/docs/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88_%E7%8E%8B%E8%8B%A5%E9%9D%9E%E7%9A%84%E7%AE%80%E5%8E%86.pdf';

class Resume extends Component {
  render() {
    const { card } = store.getState();
    const { cardBackground } = store.getState().style;

    return (
      <div className={card.isResumeVisible ? "card resume active" : "resume"}>
	<div className="content" style={cardBackground}>
	  <div className="header">
	    <h2>简历 RESUME</h2>
	    <hr />
	  </div>
	  <div className="download-resume">
	    <a href={resumeDownloadUrl} alt="download resume">下载我的简历</a>
	  </div>
	  <div className="card-part self-intro">
	    <h3>
	      <i className="icon-self-description fa fa-user"></i>
	      个人描述/评价
	    </h3>
	    <div className="self-description-box">
	      <p>
		本人本科学历，有两年前端开发经验。本人技术栈主要在前端方向，后端略有涉猎，包括：HTML5、CSS3、ES6、React、React-Router、Redux、Webpack、Less、Bootstrap、Git/SVN、Docker(Ubuntu)、Express、MySQL。
	      </p>
	      <p>
	        工作中，对自己要求较高，爱钻研，关注热点技术方向。
	      </p>
	    </div>
	  </div>
	  <div className="card-part work-experence">
	    <h3>
	      <i className="icon-work fa fa-university"></i>
	      工作经历
	    </h3>
	    <div className="work-content">
	      {
		workExperences.map((item, index) => (
		  <div className="company" key={index}>
		    <div className="title">
		      <h6>{item.company}</h6>
		      <span className="date">{item.date}</span>
		    </div>
		    <div className="intro">
		      <span className="department">{item.department}</span>
		      <span className="column-split"></span>
		      <span className="position">{item.position}</span>
		    </div>
		    <div className="des"><p>{item.description}</p></div>
		  </div>
		))
	      }
	    </div>
	  </div>
	  <div className="card-part education">
	    <h3>
	      <i className="icon-education fa fa-graduation-cap"></i>
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

