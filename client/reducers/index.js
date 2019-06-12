import {combineReducers} from 'redux';
import safeTeaReducer from './safeTeaReducer';

const reducers = combineReducers({
  safeTea: safeTeaReducer
});

export default reducers;