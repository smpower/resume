import React, { Component } from 'react';
import store from '../../store/';

import './portfolio.scss';

class Portfolio extends Component {
  render() {
    const { card } = store.getState();

    return (
      <div className={card.isPortfolioVisible ? "portfolio active" : "portfolio"}>
	<span className="line"></span>
	<div className="content"></div>
      </div>
    );
  }
}

export default Portfolio;

