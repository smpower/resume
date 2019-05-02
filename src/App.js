import React, { Component } from 'react';
import store from './store/';
import { view as Navigation } from './navigation/';
import { view as Home } from './home/';
import { view as Resume } from './resume/';
import { view as Skill } from './skill/';
import { view as Portfolio } from './portfolio/';
import { view as Contact } from './contact/';

import './App.scss';

class App extends Component {
  constructor() {
    super(...arguments);

    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);
    this.shouldActived = this.shouldActived.bind(this);

    this.state = Object.assign({}, {
      // default params
    }, this.getOwnState());
  }

  getOwnState() {
    return {
      card: store.getState().card
    };
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  /**
   * @des 判断是否要展开相应的卡片
   * @return [String] 
  **/
  shouldActived() {
    const { card } = this.state;
    for (const key in card) {
      if (card[key]) {
	if (key !== 'isHomeVisible') {
	  return key;
	}
      }
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
    const shouldActived = this.shouldActived();

    return (
      <div className="App">
	<div className={typeof shouldActived === 'undefined' ? (
	  "main"
	) : (
	  "main active"
	)}>
	  <Navigation />
	  <Resume />
	  <Skill />
	  <Portfolio />
	  <Contact />
	  <Home />
	</div>
      </div>
    );
  }
}

export default App;
