import React, { Component } from 'react';
import store from '../../store/';

import './skill.scss';

class Skill extends Component {
  render() {
    const { card } = store.getState();

    return (
      <div className={card.isSkillVisible ? "skill active" : "skill"}>
	<span className="line"></span>
	<div className="content"></div>
      </div>
    );
  }
}

export default Skill;

