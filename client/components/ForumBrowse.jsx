import React, {useEffect} from 'react';
import * as actions from '../actions/forumActions';
import {useSelector, useDispatch} from 'react-redux';
import ForumBrowsePost from './ForumBrowsePost.jsx';

const ForumBrowse = ({onClick}) => {
  const dispatch = useDispatch();

  const posts = useSelector(store => store.forum.posts);
  console.log(posts)

  useEffect(
    () => {
      dispatch(actions.fetchPosts());
    },
    []
  );

  return (
    <div>
      <h3>Create a new post: </h3>
      <button onClick={() => onClick('write')}>Write Post</button>
      <h3>Recent posts:</h3>
      {posts.map(post => {
        return <ForumBrowsePost 
          user={post.username}
          text={post.text} 
          title={post.title} 
          postId={post.postid}
          key={`${post.text.slice(0,15)}${post.username}`}
        />
      })}
    </div>
  );
}

export default ForumBrowse;