import React, { Component } from 'react';
import store from '../../store/';

import './contact.scss';

class Contact extends Component {
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
	</div>
      </div>
    );
  }
}

export default Contact;

