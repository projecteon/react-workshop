import React from 'react'
import PropTypes from 'prop-types'

class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.name}`);
  }
}

Hello.propTypes = {
  name: PropTypes.string
};

Hello.defaultProps =  {
  name: 'Stranger'
}

export default Hello;
