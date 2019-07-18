import React, {useEffect} from 'react';
import * as actions from '../actions/forumActions';
import {useSelector, useDispatch} from 'react-redux';
import ForumBrowsePost from './ForumBrowsePost.jsx';

const ForumBrowse = ({onClick}) => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(actions.fetchPosts());
    },
    []
  );

  const posts = useSelector(store => store.forum.posts);

  const postComponents = [];

  for (let i = posts.length - 1; i >= 0; i--) {
    postComponents.push(
      <ForumBrowsePost 
        user={posts[i].username}
        text={posts[i].text} 
        title={posts[i].title} 
        postId={posts[i].postid}
        key={`${posts[i].text.slice(0,15)}${posts[i].username}`}
      />
    );
  }
    
  return (
    <div>
      <h3>Create a new post: </h3>
      <button onClick={() => onClick('write')}>Write Post</button>
      <h3>Recent posts:</h3>
      {postComponents}
    </div>
  );
}

export default ForumBrowse;