import { combineReducers } from 'redux';
import personalReduce from './reducer';

const rootReducer = combineReducers({ personalReduce });

export default rootReducer;
