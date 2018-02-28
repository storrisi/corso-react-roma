import { combineReducers } from 'redux';
import expenses from './expenses';
import auth from './auth';

const rootReducer = combineReducers({
    expenses,
    auth
});

export default rootReducer;