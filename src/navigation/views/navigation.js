import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cardActions } from '../../store/card/';

import './navigation.scss';

const menu = [
  {
    text: 'home',
    translation: '主页',
    isClicked: true,
    target: 'isHomeVisible'
  },
  {
    text: 'resume',
    translation: '简历',
    isClicked: false,
    target: 'isResumeVisible'
  },
  {
    text: 'skill',
    translation: '技能',
    isClicked: false,
    target: 'isSkillVisible'
  },
  {
    text: 'portfolio',
    translation: '简历',
    isClicked: false,
    target: 'isPortfolioVisible'
  },
  {
    text: 'contact',
    translation: '联系我',
    isClicked: false,
    target: 'isContactVisible'
  }
];

class Navigation extends Component {
  constructor() {
    super(...arguments);

    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);

    this.state = Object.assign({}, {
      // default params
    });
  }

  onChange() {
  }

  getOwnState() {
  }

  componentDidMount() {
    this.setState({
      // unsubscribe: this.context.store.subscribe(this.onChange)
    });
  }

  componentWillUnmount() {
    // this.state.unsubscribe(this.onChange);
  }

  render() {
    return (
      <div className="navigation">
	<ul>
	  {
	    menu.map((menuItem, menuIndex) => {
	      return (
		<li className="menu" key={menuIndex}>
		  <span className="text">{menuItem.translation}</span>
		</li>
	      );
	    })
	  }
	</ul>
      </div>
    );
  }
}

Navigation.contextTypes = {
  store: PropTypes.object
};

export default Navigation;

