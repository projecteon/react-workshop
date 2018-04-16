import React from 'react'
import Hello from './Hello'

class Root extends React.Component {
  render() {
    return React.createElement('div', null,
      React.createElement(Hello, null, null),
      React.createElement(Hello, {name: 'Xledger'}, null));
  }
}

export default Root
