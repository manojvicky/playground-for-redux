import { connect } from 'react-redux'; 
import Counter from './counter';
// import * as counterActions from './counter.action';
import { increment } from './counter.action';

// import { bindActionCreators } from "redux";

export default connect(
    (state)=>(
    {
        data = state.counterReducer
    }),
    // (dispatch)=>({
    //      actions: bindActionCreators(counterActions, dispatch)
    // })
)(Counter);

// const mapStateToProps = state => {
//   return {
//     data = state.counterReducers.data
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(counterActions, dispatch)
//   }
// }

// const CounterContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)

// export default CounterContainer;
