import React, { Component } from 'react';
import store from '../../store/';

import './home.scss';

class Home extends Component {
  render() {
    const { cardBackground } = store.getState().style;
    return (
      <div className="home">
	<span className="line"></span>
	<div className="content" style={cardBackground}>
	</div>
      </div>
    );
  }
}

export default Home;

