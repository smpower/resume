import React, { Component } from 'react';
import store from '../../store/';

import './contact.scss';

class Contact extends Component {
  render() {
    const { card } = store.getState();
    const { cardBackground } = store.getState().style;

    return (
      <div className={card.isContactVisible ? "contact active" : "contact"}>
	<span className="line"></span>
	<div className="content" style={cardBackground}>
	</div>
      </div>
    );
  }
}

export default Contact;

