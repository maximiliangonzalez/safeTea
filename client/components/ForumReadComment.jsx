import React from 'react';

const ForumReadComment = ({user, text}) => (
  <>
    <h3>{user}</h3>
    <p>{text}</p>
    <hr />
  </>
);

export default ForumReadComment;