import * as types from '../constants/actionTypes';

const initialState = {
  display: 'safety',
  request: {
    result: null
  }
}

const safeTeaReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.CHANGE_DISPLAY: {
      return {
        ...state,
        display: action.payload
      }
    }
    case types.RESET_RESULTS: {
      return {
        ...state,
        request: {
          ...state.request,
          result: null
        }
      }
    }
    case types.QUERY_DB: {
      return {
        ...state,
        request: {
          ...state.request,
          result: action.payload
        }
      }
    }
    default:
      return state;
  }
};

export default safeTeaReducer;