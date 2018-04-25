import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { ApplicationState } from '../reducers';
import * as ToDoReducer from '../reducers/ToDo';

import Hello from './Hello';
import { Dispatch } from 'redux';
import * as actions from '../actions/ToDo';

type RootProps =
    ToDoReducer.ToDoState            // ... state we've requested from the Redux store
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
            <div>I've been clicked {props.counter} times</div>
          </div>;
};

function mapDispatchToProps(dispatch: Dispatch<actions.ToDoActions>) {
  return {
    onIncrement: () => dispatch(actions.increaseCounter()),
    onDecrement: () => dispatch(actions.decreaseCounter()),
  };
}

export default hot(module)(connect(
  (state: ApplicationState) => state.todo,
  mapDispatchToProps,
)(Root));
