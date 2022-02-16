import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './store/reducers';

const win: any = window;
const devTools = win?.__REACT_DEVTOOLS_EXTENSION__ && win?.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducers, devTools);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
