import constants from "./Async.constant";

export const increment = (data)=>({
    type: constants.INCREMENT,
    data
});

export const decrement = (data)=>({
    type: constants.DECREMENT,
    data
});