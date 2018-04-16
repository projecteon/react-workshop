import React from 'react'
import createReactClass from 'create-react-class'
import Hello from './Hello'

var Root = createReactClass({
  render: function() {
    return React.createElement('div', null,
      React.createElement(Hello, null, null),
      React.createElement(Hello, {name: 'Xledger'}, null));
  }
});

export default Root
