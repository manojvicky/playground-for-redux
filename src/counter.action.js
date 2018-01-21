import constants from "./counter.constant";

export function increment(data){
  console.log("increment action", data);
  return {
    type: 'INCREMENT',
    data
  }
}

export function decrement(data){
  return {
    type: 'DECREMENT',
    data
  }
}