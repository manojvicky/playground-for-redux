import { connect } from 'react-redux'; 
import Async from './Async';
import * as AsyncActions from './Async.action';
// import AsyncReducer from './Async.reducer';
import { bindActionCreators } from "redux";

export default connect(
    (state)=>(
    {
        count: state.AsyncReducer.count
    }),
    (dispatch)=>({
         actions: bindActionCreators(AsyncActions, dispatch)
    })
)(Async);

