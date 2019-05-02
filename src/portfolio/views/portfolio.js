import React, { Component } from 'react';
import store from '../../store/';

import './portfolio.scss';

class Portfolio extends Component {
  render() {
    const { card } = store.getState();

    return (
      <div className={card.isPortfolioVisible ? "portfolio active" : "portfolio"}>
	portfolio content
      </div>
    );
  }
}

export default Portfolio;

