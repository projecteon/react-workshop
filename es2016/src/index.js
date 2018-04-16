import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Root from './components/Root'

const render = Component => {
  ReactDOM.render(
    React.createElement(AppContainer, null, React.createElement(Component, null, null)),
    document.getElementById('root')
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./components/Root', () => { render(Root) })
}
