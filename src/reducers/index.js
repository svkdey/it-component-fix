import {combineReducers} from 'redux';
import logReducer from './logReducer';
import techReducer from './techReduce'
export default combineReducers({
    logs:logReducer,
    techs:techReducer
})