import constants from "./counter.constant";
import * as CounterActions from "./counter.action";


const initalstate = {
  data:0
};

export default function reducer(state=initalstate, action){
  switch (action.type) {
    case 'INCREMENT':
    console.log("state", action.data);
      return (Object.assign({}, state, 
      {data: action.data}))
       
    case 'DECREMENT':
      return (Object.assign({}, state, action.data))

    default:
      return state
  }
}

export {initalstate};
