import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import rootreducer from './combineReducer';
// import logger from 'redux-logger'
import App from './App';

const customLogger = function(store){
                        // console.log("store", store);
                        return function (next){
                        // console.log("next", next);
                          return function (action){
                            // console.log("action", action);
                            console.log("prev store:", store.getState());
                            console.log("Action:", action);
                            next(action);
                            console.log("next store:", store.getState());
                        }
                      }
                    }

let store = createStore(
  rootreducer,
  applyMiddleware(customLogger)
  );

ReactDOM.render(
  <Provider store={store}>
    <Router >
      <Route path="/" component={App}/>
    </Router>
  </Provider>, 
document.getElementById('app'));