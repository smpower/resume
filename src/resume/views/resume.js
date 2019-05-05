import React, { Component } from 'react';
import store from '../../store/';

import './resume.scss';

class Resume extends Component {
  render() {
    const { card } = store.getState();
    const { cardBackground } = store.getState().style;

    return (
      <div className={card.isResumeVisible ? "resume active" : "resume"}>
	<span className="line"></span>
	<div className="content" style={cardBackground}>
	</div>
      </div>
    );
  }
}

export default Resume;

