import constants from "./counter.constant";
import * as CounterActions from "./counter.action";

const initalstate = {
  config:{
    controls:[
      {
        id: "manoj",
        type: "checkbox",
        options:{
          label: "column/row",
          options:[
            
          ]
        }
      },
      {
        id: "vicky",
        type: "checkbox",
        options:{
          label: "column/row",
          options:[
            {
              type: "radio",
              label: "column",
              options:{
                label: "groupBy",
                options:[
                  {
                    type: "radio",
                    label: "fund"
                  },
                  {
                    type: "radio",
                    label: "statistics"
                  }
                ]
              }
            },
            {
              type: "radio",
              label: "row"
            }
          ]
        }
      }
    ]
  }
};

export default function reducer(state=initalstate, action){
  switch (action.type) {
    case 'INCREMENT':
      return (Object.assign({}, state, action.data))
       
    case 'DECREMENT':
      return (Object.assign({}, state, action.data))

    default:
      return state
  }
}

export {initalstate};
