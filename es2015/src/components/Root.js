import React from 'react'
import createReactClass from 'create-react-class'
import Hello from './Hello'

var Root = createReactClass({
  getInitialState: function() {
    return {counter: 0};
  }, onCounterClick: function() {
    this.setState({counter: this.state.counter + 1});
  }, render: function() {
    return React.createElement('div', null,
      React.createElement(Hello, null, null),
      React.createElement(Hello, {name: 'Xledger'}, null),
      React.createElement('button', {onClick: this.onCounterClick}, `I've been clicked ${this.state.counter} times`));
  }
});

export default Root
