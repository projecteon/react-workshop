import React from 'react'
import { hot } from 'react-hot-loader'

import Hello from './Hello'

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.onCounterClick = this.onCounterClick.bind(this);

    this.state = { counter: 0 };
  }

  onCounterClick() {
    this.setState({counter: this.state.counter + 1});
  }

  render() {
    return React.createElement('div', null,
      React.createElement(Hello, null, null),
      React.createElement(Hello, {name: 'Xledger'}, null),
      React.createElement('button', {onClick: this.onCounterClick}, `I've been clicked ${this.state.counter} times`));
  }
}

export default hot(module)(Root)
