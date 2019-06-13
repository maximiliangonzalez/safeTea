import {combineReducers} from 'redux';
import safeTeaReducer from './safeTeaReducer';
import forumReducer from './forumReducer';

const reducers = combineReducers({
  safeTea: safeTeaReducer,
  forum: forumReducer
});

export default reducers;