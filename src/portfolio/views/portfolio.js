import React, { Component } from 'react';
import store from '../../store/';

import './portfolio.scss';

class Portfolio extends Component {
  render() {
    const { card } = store.getState();
    const { cardBackground } = store.getState().style;

    return (
      <div className={card.isPortfolioVisible ? "portfolio active" : "portfolio"}>
	<span className="line"></span>
	<div className="content" style={cardBackground}>
	</div>
      </div>
    );
  }
}

export default Portfolio;

