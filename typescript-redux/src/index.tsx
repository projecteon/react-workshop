import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Root from './components/Root';
import { ApplicationState } from './reducers';
import configureStore from './store';

const initialState = (window as any).initialReduxState as ApplicationState;
const store = configureStore(initialState);

ReactDOM.render(<Provider store={ store }><Root /></Provider>, document.getElementById('root'));
