import {combineReducers} from 'redux';
import courseReducer from './courseReducer';

const rootReduce = combineReducers({
  courses: courseReducer
});

export default rootReduce;
