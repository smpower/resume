import React, { Component } from 'react';
import store from '../../store/';

import './contact.scss';

const mailTo = {
  to: 'rf.wangchn@gmail.com',
  subject: '招聘_前端工程师',
  body: `你好：%0d%0a
        我查看了你的在线简历(https://www.ruofei.me/resume/)，对你很感兴趣，下面是我司的 JD，查收邮件后请尽快回复你的意向，谢谢。%0d%0a%0d%0a%0d%0a%0d%0a`
}

class Contact extends Component {
  constructor() {
    super(...arguments);

    this.state = Object.assign({}, {
      // default params
    });
  }
  render() {
    const { card } = store.getState();
    const { cardBackground } = store.getState().style;

    return (
      <div className={card.isContactVisible ? "card contact active" : "contact"}>
	<div className="content" style={cardBackground}>
	  <div className="header">
	    <h2>联系我 CONTACT</h2>
	    <hr />
	  </div>
	  <div className="contact-box">
	    <div className="box-item">
	      <h4><i className="fa fa-map-marker"></i>现住址</h4>
	      <hr />
	      <p>山东省青岛市黄岛区</p>
	    </div>
	    <div className="box-item">
	      <h4><i className="fa fa-phone-square"></i>电话</h4>
	      <hr />
	      <p>+86 153 1872 4236</p>
	    </div>
	    <div className="box-item">
	      <h4><i className="fa fa-envelope"></i>邮箱</h4>
	      <hr />
	      <p>
		<a
		  href={`mailto:${mailTo.to}?subject=${mailTo.subject}&body=${mailTo.body}`} 
		  rel="noopener noreferrer">rf.wangchn@gmail.com
		</a>
	      </p>
	    </div>
	  </div>
	</div>
      </div>
    );
  }
}

export default Contact;

