import {combineReducers} from "redux";
import AsyncReducer from "./Async.reducer";
import initializeForm from "./InitializeFrom"
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    AsyncReducer,
    initializeForm,
    form: formReducer                   
});

export default rootReducer;