import * as types from '../constants/actionTypes';

// for safeTea reducer

export const changeDisplay = display => ({
  type: types.CHANGE_DISPLAY,
  payload: display
});

export const resetResults = () => ({
  type: types.RESET_RESULTS
});

export const queryDB = endpoint => dispatch => {
  fetch(endpoint)
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: types.QUERY_DB,
        payload: res
      });
    });
};
