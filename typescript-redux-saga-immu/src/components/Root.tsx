import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IApplicationState } from '../reducers';
import * as ToDoReducer from '../reducers/ToDo';

import * as actions from '../actions/ToDo';
import Hello from './Hello';

type RootProps =
    ToDoReducer.IToDoState            // ... state we've requested from the Redux store
    & {
      onIncrement?: () => actions.IncreaseCounterAction;
      onDecrement?: () => actions.DecreaseCounterAction;
    };

// tslint:disable-next-line:variable-name
const Root: React.StatelessComponent<RootProps> = (props: RootProps) => {
  return  <div>
            <Hello />
            <Hello name='Xledger' />
            <button onClick={props.onIncrement}>Increase</button>
            <button onClick={props.onDecrement}>Decrease</button>
            <div>I've been clicked {props.counter} times</div>
          </div>;
};

function mapDispatchToProps(dispatch: Dispatch<actions.ToDoActions>) {
  return {
    onDecrement: () => dispatch(actions.decreaseCounter()),
    onIncrement: () => dispatch(actions.increaseCounter()),
  };
}

export default hot(module)(connect(
  (state: IApplicationState) => state.todo,
  mapDispatchToProps,
)(Root));
