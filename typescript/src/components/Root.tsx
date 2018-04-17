import * as React from 'react'
import { hot } from 'react-hot-loader'

import Hello from './Hello'

type RootStateType = {
  counter: number;
}

class Root extends React.Component<{}, RootStateType> {
  constructor(props: {}) {
    super(props);

    this.onCounterClick = this.onCounterClick.bind(this);

    this.state = {counter: 0};
  }

  onCounterClick() {
    this.setState({counter: this.state.counter + 1});
  }

  render() {
    return  <div>
              <Hello />
              <Hello name='Xledger' />
              <button onClick={this.onCounterClick}>I've been clicked {this.state.counter} times</button>
            </div>
  }
}

export default hot(module)(Root)
