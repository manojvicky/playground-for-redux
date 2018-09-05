import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import rootreducer from './combineReducer';
import {loadState, saveState} from './localState';
// import logger from 'redux-logger'
import App from './App';

localStorage.setItem("state", JSON.stringify({counterReducer:{count:777}}));
let initialState= loadState();
let store = createStore(
  rootreducer,
  initialState,
  // applyMiddleware(logger)
  );
store.dispatch({
  type: 'INCREMENT',
  data:"i am"
});
store.subscribe(()=>{
  saveState(store.getState());
});
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <Router >
      <Route path="/" component={App}/>
    </Router>
  </Provider>, 
document.getElementById('app'));