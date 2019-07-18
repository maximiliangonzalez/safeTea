import React, {useState, useEffect} from 'react';
import ForumReadComment from './ForumReadComment.jsx';

const ForumReadComments = ({id, newComments}) => {
  const [comments, setComments] = useState(null);

  useEffect(
    () => {
      fetch(`/comments/${id}`)
          .then(res => res.json())
          .then(res => {
            setComments(res);
          });
    },
    []
  );

  return (
    <>
      {comments !== null &&
        <div>
          <h4>Comments: </h4>
          {newComments.map(comment => {
            return (
                <ForumReadComment 
                  text={comment.text}
                  user={comment.user}
                />
              );
            })
          }
          {comments.map(comment => {
            return (
              <ForumReadComment 
                text={comment.text}
                user={comment.username}
                key={`${comment.text.slice(0,15)}${comment.username}`}
              />
            );
          })}
        </div>
      }
    </>
  );
}

export default ForumReadComments;

