import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootreducer from './combineReducer';
import App from './App';
let store = createStore(rootreducer);

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));