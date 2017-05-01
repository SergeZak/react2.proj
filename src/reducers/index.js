import {combineReducers} from 'redux';
import authorReducer from './authorReducer';
import courseReducer from './courseReducer';

const rootReduce = combineReducers({
  authors: authorReducer,
  courses: courseReducer
});

export default rootReduce;
