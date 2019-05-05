import React, { Component } from 'react';
import store from '../../store/';
import { actions as modalActions } from '../../store/modal/';

import qqImage from './images/qq.jpg';
import wechatImage from './images/wechat.png';

import './modal.scss';

const Qq = ({handleClick}) => (
  <div className="modal-qq">
    <div className="modal-header">
      <div className="button-close" onClick={handleClick('toggleModal')}>
	<i className="fa fa-close"></i>
      </div>
    </div>
    <div className="modal-body">
      <div className="image">
	<img src={qqImage} alt="qr-code-qq" />
      </div>
      <div className="intro text-center">
	<p>扫一扫，加我 QQ</p>
      </div>
    </div>
  </div>
);

const Wechat = ({handleClick}) => (
  <div className="modal-wechat">
    <div className="modal-header">
      <div className="button-close" onClick={handleClick('toggleModal')}>
	<i className="fa fa-close"></i>
      </div>
    </div>
    <div className="modal-body">
      <div className="image">
	<img src={wechatImage} alt="qr-doce-wechat" />
      </div>
      <div className="intro text-center">
	<p>扫一扫，加我微信</p>
      </div>
    </div>
  </div>
);

class Modal extends Component {
  constructor() {
    super(...arguments);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    return function(event) {
      switch(type) {
	case 'toggleModal':
	  store.dispatch(modalActions.unvisible());
	  break;
        default:
	  break;
      }
    }
  }

  render() {
    const { modal } = store.getState();

    switch(modal.which) {
      case 'qq':
	return (
	  <div className={modal.isModalVisible ? 'modal active' : 'modal'}>
	    <div className="modal-content">
	      <Qq handleClick={this.handleClick} />
	    </div>
	  </div>
	);
      case 'wechat':
	return (
	  <div className={modal.isModalVisible ? 'modal active' : 'modal'}>
	    <div className="modal-content">
	      <Wechat handleClick={this.handleClick} />
	    </div>
	  </div>
	);
      default:
	return (
	  <div className={modal.isModalVisible ? 'modal active' : 'modal'}>
	    <div className="modal-content">
	    </div>
	  </div>
	);
    }
  }
}

export default Modal;

