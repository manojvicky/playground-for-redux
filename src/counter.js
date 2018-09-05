import React from 'react';

class Counter extends React.Component {
    constructor(){
        super();
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment(){
        this.props.actions.increment(this.props.count+1);
    }

    decrement(){
        this.props.actions.decrement(this.props.count-1);
    }
   render() {
     
      return (
        <div>
            <button onClick={this.increment} >
                  Increment
            </button>
            <button onClick={this.decrement} >
                  Decrement
            </button>
            <div>Counter Value: <span>{this.props.count}</span></div>
        </div>
      );
   }
}
export default Counter;