import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../../store/';
import { actions as cardActions } from '../../store/card/';

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
    text: 'project',
    translation: '项目',
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
    this.handleClick = this.handleClick.bind(this);
    this.getActivedButton = this.getActivedButton.bind(this);

    this.state = Object.assign({}, {
      // default params
    }, this.getOwnState());
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  getOwnState() {
    return {
      card: store.getState().card
    };
  }

  handleClick(visibleTarget) {
    const _this = this;

    return function(event) {
      const { card } = _this.state;

      // 避免重复点击[主页]按钮
      store.dispatch(cardActions.visible(visibleTarget));
      if (visibleTarget === 'isHomeVisible') {
	for (const key in card) {
	  if (card[key] && key !== 'isHomeVisible') {
	    store.dispatch(cardActions.unvisible(key));
	  }
	}

	if (card[visibleTarget]) return;
	store.dispatch(cardActions.visible(visibleTarget));
      }

      // 点击其他按钮
      else {
	for (const key in card) {
	  if (card[key]) {
	    if (key !== 'isHomeVisible') {
	      store.dispatch(cardActions.unvisible(key));
	    }
	  }
	}
	store.dispatch(cardActions.visible(visibleTarget));
      }
    }
  }

  /**
   * @des 获取激活的按钮
   * @return [String] - 当前激活的按钮
  **/
  getActivedButton() {
    const { card } = this.state;
    for (const key in card) {
      if (card[key] && key !== 'isHomeVisible') return key;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (typeof this.state.unsubscribe !== 'undefined') return true;
    else return false;
  }

  componentDidMount() {
    this.setState({
      unsubscribe: store.subscribe(this.onChange)
    });
  }

  componentWillUnmount() {
    this.state.unsubscribe(this.onChange);
  }

  render() {
    let activedButton = this.getActivedButton();
    if (typeof activedButton === 'undefined') activedButton = 'isHomeVisible';

    return (
      <div className="navigation">
	<ul>
	  {
	    menu.map((menuItem, menuIndex) => {
	      return (
		<li 
		  className={activedButton === menuItem.target ? (
		    'menu active'
		  ) : (
		    'menu'
		  )} 
		  key={menuIndex}
		  onClick={this.handleClick(menuItem.target)}
		>
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

