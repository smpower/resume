import React, { Component } from 'react';
import store from '../../store/';

import './contact.scss';

const mailTo = {
  to: 'rf.wangchn@gmail.com',
  subject: '职位邀请_前端工程师'
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
		  href={`mailto:${mailTo.to}?subject=${mailTo.subject}`} 
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

