import React, {useState} from 'react';

const ForumWrite = ({onClick}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [userId, setUserId] = useState(3);

  const changeText = e => {
    setText(e.target.value);
  }
  
  const changeTitle = e => {
    setTitle(e.target.value);
  }

  const submit = () => {
    fetch('/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        text, 
        userId
      })
    })
    .catch(err => console.log(err));
    onClick('browse');
  }

  return (
    <>
      <button onClick={() => onClick('browse')}>Back to browsing</button>
      <br />
      Title:
      <br />
      <input type="text" onChange={changeTitle}></input>
      <br />
      Post: 
      <br />
      <textarea onChange={changeText}></textarea>
      <br />
      Tags (comma separated):
      <input type="text"></input>
      <br />
      <button onClick={submit}>Submit!</button>
    </>
  );
}

export default ForumWrite;