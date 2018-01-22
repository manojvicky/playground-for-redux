
import React from 'react';
import { connect } from 'react-redux';
import { increment } from './counter.action';
// import { bindActionCreators } from 'redux';
console.log("actions", increment);
class Counter extends React.Component {
  constructor(props) {
        super(props);
   }
   render() {
     return (
           <div className="container">
            <form>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" 
                    onClick={(e) => {e.preventDefault();
                    console.log("hello");
                    this.props.dispatch(increment(1))}}>
                      Add
                  </button>
                </div>
                <p>{this.props.count}</p>
              </div>
            </form>
            </div>
     )
   }
}

function mapStateToProps(state){
  return {
    count: state.counterReducers.data,
  };
}

// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators(increment, dispatch) }
// }
export default connect(mapStateToProps)(Counter);