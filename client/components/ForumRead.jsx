import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import ForumReadComments from './ForumReadComments.jsx';

const ForumRead= ({onClick}) => {
  const currentPost = useSelector(store => store.forum.currentPost);

  const [comment, setComment] = useState('');
  const [userId, setUserId] = useState(3);
  const [newComments, setNewComments] = useState([]);

  const updateText = e => {
    setComment(e.target.value);
  }

  const sendComment = () => {
    fetch(`/comments/${currentPost.postid}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({comment, userId})
    })
    .then(res => res.json())
    .then(data => {
      setNewComments(prevComments => [...prevComments, {text: comment, user: userId}])
      // we only have access to the userId because there's no real authentication.
      // if there were more robustly implemented authentication, we could store all user info in state upon login
      // that we we'd actually be able to display the username above a comment instead of just their id as i'm doing now
      // so fixing this specific error will take a huge amount of refactoring, but it's refactoring that's necessary
    })
  }

  return (
    <>
      <button onClick={() => onClick('browse')}>Back to browsing</button>
      {currentPost !== null &&
        <div>
          <h2>
            {currentPost.title}
          </h2>
          <h4>
            Posted by {currentPost.username}
          </h4>
          <p>
            {currentPost.text}
          </p>
          <br />
          <h5>
            leave a friendly or informative comment (❁´◡`❁)
          </h5>
          <br />
          <textarea className="comment" onChange={e => updateText(e)}></textarea>
          <br />
          <button onClick={sendComment}>
            Submit!
          </button>
          <ForumReadComments id={currentPost.postid} newComments={newComments}/>
        </div>
      }
    </>
  );
}

export default ForumRead;