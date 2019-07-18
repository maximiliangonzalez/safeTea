import React from 'react';
import * as actions from '../actions/forumActions';
import { useDispatch } from 'react-redux';

const ForumBrowsePost = ({postId, title, user}) => {
  const dispatch = useDispatch();
  const changeActivity = activity => dispatch(actions.changeActivity(activity));
  const fetchAPost = id => dispatch(actions.fetchAPost(id));
  const goToPost = id => {
    changeActivity('read');
    fetchAPost(id);
  }

  return (
    <div className="post-browsing">
      <h3>
        <a onClick={() => goToPost(postId)}>
          {title}
        </a>
      </h3>
      <p>posted by: {user}</p>
    </div>
  );
}

export default ForumBrowsePost;