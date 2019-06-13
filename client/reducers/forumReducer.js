import * as types from '../constants/actionTypes';

const initialState = {
  activity: 'browse',
  posts: [],
  currentPost: null
}

const forumReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.CHANGE_ACTIVITY: {
      return {
        ...state,
        activity: action.payload
      };
    }
    case types.FETCH_POSTS: {
      return {
        ...state,
        posts: action.payload
      };
    }
    case types.FETCH_A_POST: {
      return {
        ...state,
        currentPost: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

export default forumReducer;