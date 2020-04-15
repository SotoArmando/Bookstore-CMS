
import { combineReducers } from 'redux';
import { book, bookfilter } from './book';


const rootReducer = combineReducers({
  book, bookfilter,
});


export default rootReducer;
