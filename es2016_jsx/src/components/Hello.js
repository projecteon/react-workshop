import React from 'react'
import PropTypes from 'prop-types'

const Hello = (props) => {
  return <div>Hello {props.name}</div>;
}

Hello.propTypes = {
  name: PropTypes.string
};

Hello.defaultProps =  {
  name: 'Stranger'
}

export default Hello;
