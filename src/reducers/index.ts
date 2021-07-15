import { combineReducers } from 'redux';
import successReducer from './successReducer';

const reducers = combineReducers({ success: successReducer });

export default reducers;
