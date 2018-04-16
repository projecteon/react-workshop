import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'

var Hello = createReactClass({
  propTypes: {
    name: PropTypes.string
  },
  getDefaultProps: function() {
    return {
      name: 'Stranger'
    };
  },
  render: function() {
    return React.createElement('div', null, `Hello ${this.props.name}`);
  }
});

export default Hello;
