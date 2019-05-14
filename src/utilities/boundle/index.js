import { Component } from 'react';
import { view as LoadAnimation } from '../../loadAnimation/';
import { view as InitAppAnimation } from '../../initAppAnimation/';

export default class Boundle extends Component {
  constructor() {
    super(...arguments);
    this.load = this.load.bind(this);
    this.state = { mod: null };
  }

  load(props) {
    this.setState({ mod: null });

    props.load().then(mod => {
      this.setState({
	mod: mod.default ? mod.default : LoadAnimation
      });
    }).catch(error => {
      throw new Error('加载组件失败！');
    });
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  render() {
    if (this.props.initApp) {
      return this.state.mod ? this.props.children(this.state.mod) : this.props.children(InitAppAnimation)
    } else {
      return this.state.mod ? this.props.children(this.state.mod) : this.props.children(LoadAnimation)
    }
  }
}

