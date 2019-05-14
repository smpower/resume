import React, { Component } from 'react';
import store from '../../store/';
import avatar from './images/avatar.jpg';
import { actions as modalActions } from '../../store/modal/';

import './home.scss';

class Home extends Component {
  constructor() {
    super(...arguments);

    this.handleClick = this.handleClick.bind(this);

    this.state = Object.assign({}, {
      // default params
      mailTo: {
        to: 'rf.wangchn@gmail.com',
	subject: '职位邀请_前端工程师'
      }
    });
  }

  handleClick(params) {
    return function(event) {
      switch(params.type) {
	case 'toggleModal':
	  switch(params.which) {
	    case 'qq':
	      store.dispatch(modalActions.visible('qq'));
	      break;
	    case 'wechat':
	      store.dispatch(modalActions.visible('wechat'));
	      break;
	    default:
	      break;
	  }
	  break;
	default:
	  break;
      }
    }
  }

  render() {
    const { cardBackground, cardBackground2 } = store.getState().style;
    const { mailTo } = this.state;

    return (
      <div className="home">
	<div className="content" style={cardBackground}>
	  <div className="avatar">
	    <img src={avatar} alt="avatar" />
	  </div>
	  <div className="userinfo text-center">
	    <h3>王先生</h3>
	    <h4>前端工程师</h4>
	  </div>
	  <hr />
	  <div className="userintro">
	    <p>编码如生活，要在跌倒的 bug 那里站起来！</p>
	  </div>
	  <div className="contact-box">
	    <span style={cardBackground2}>Email:
	      <a href={`mailto:${mailTo.to}?subject=${mailTo.subject}`}
		rel="noopener noreferrer">
		rf.wangchn@gmail.com
	      </a> / Phone: 153 1872 4236
	    </span>
	  </div>
	  <div className="social-icons">
	    <a href="https://github.com/smpower/" target="_blank"  rel="noopener noreferrer">
	      <span className="fa fa-github"></span>
	    </a>
	    <a href="./#/qq" rel="noopener noreferrer" onClick={this.handleClick({
	      type: 'toggleModal',
	      which: 'qq'
	    })}>
	      <span className="fa fa-qq"></span>
	    </a>
	    <a href="./#/wechat" rel="noopener noreferrer" onClick={this.handleClick({
	      type: 'toggleModal',
	      which: 'wechat'
	    })}>
	      <span className="fa fa-wechat"></span>
	    </a>
	    <a href={`mailto:${mailTo.to}?subject=${mailTo.subject}`}
	      rel="noopener noreferrer"
	      onClick={this.handleClick({
		type: '',
		which: ''
	      })}>
	      <span className="fa fa-envelope"></span>
	    </a>
	  </div>
	</div>
      </div>
    );
  }
}

export default Home;

