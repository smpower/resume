import React, { Component } from 'react';
import store from '../../store/';

import './contact.scss';

class Contact extends Component {
  render() {
    const { card } = store.getState();

    return (
      <div className={card.isContactVisible ? "contact active" : "contact"}>
	<span className="line"></span>
	<div className="content">
	</div>
      </div>
    );
  }
}

export default Contact;

