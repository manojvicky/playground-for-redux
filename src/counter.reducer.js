import constants from "./counter.constant";
import * as CounterActions from "./counter.action";

const initalstate = {
count: 90
};

export default function reducer(state=initalstate, action){
  switch (action.type) {
    case 'INCREMENT':
      return (Object.assign({}, state, {count: action.data}))
       
    case 'DECREMENT':
      return (Object.assign({}, state, {count: action.data}))

    default:
      return state
  }
}

export {initalstate};
