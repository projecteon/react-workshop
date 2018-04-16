import * as React from 'react'

type HelloPropType = {
  name?: string;
}

class Hello extends React.Component<HelloPropType, {}> {
  static defaultProps: Partial<HelloPropType> = {
    name: 'Stranger'
  };

  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

export default Hello;
