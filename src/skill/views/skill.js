import React, { Component } from 'react';
import store from '../../store/';

import './skill.scss';

class Skill extends Component {
  render() {
    const { card } = store.getState();
    const { cardBackground } = store.getState().style;

    return (
      <div className={card.isSkillVisible ? "skill active" : "skill"}>
	<span className="line"></span>
	<div className="content" style={cardBackground}>
	</div>
      </div>
    );
  }
}

export default Skill;

