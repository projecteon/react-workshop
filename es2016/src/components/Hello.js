import React from 'react'
import PropTypes from 'prop-types'

const Hello = (props) => {
  return React.createElement('div', null, `Hello ${props.name}`);
}

Hello.propTypes = {
  name: PropTypes.string
};

Hello.defaultProps =  {
  name: 'Stranger'
}

export default Hello;
