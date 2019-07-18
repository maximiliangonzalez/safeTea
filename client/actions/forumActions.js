import * as types from '../constants/actionTypes';

export const changeActivity = activity => ({
  type: types.CHANGE_ACTIVITY,
  payload: activity
});

export const fetchPosts = () => dispatch => {
  fetch('/posts')
    .then(res => res.json())
    .then(res => {
        dispatch({
          type: types.FETCH_POSTS,
          payload: res
        });
      })
      .catch(err => console.log(err));
};

export const fetchAPost = id => dispatch => {
  fetch(`/post/${id}`)
  .then(res => res.json())
  .then(res => {
    dispatch({
      type: types.FETCH_A_POST,
      payload: res
    });
  })
  .catch(err => console.log(err));
};