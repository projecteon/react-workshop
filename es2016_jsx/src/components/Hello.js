import React from 'react'
import PropTypes from 'prop-types'

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

Hello.propTypes = {
  name: PropTypes.string
};

Hello.defaultProps =  {
  name: 'Stranger'
}

export default Hello;
