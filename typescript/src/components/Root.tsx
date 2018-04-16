import * as React from 'react'
import { hot } from 'react-hot-loader'

import Hello from './Hello'

const Root = () => (
  <div>
    <Hello />
    <Hello name='Xledger' />
  </div>
)

export default hot(module)(Root)
