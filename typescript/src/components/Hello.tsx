import * as React from 'react';

type HelloPropType = {
  name?: string;
};

// tslint:disable-next-line:variable-name
const Hello: React.StatelessComponent<HelloPropType> = (props: HelloPropType) => {
  return <div>Hello {props.name}</div>;
};

Hello.defaultProps = {
  name: 'Stranger',
};

export default Hello;
