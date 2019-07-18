import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/forumActions';

import ForumBrowse from './ForumBrowse.jsx';
import ForumRead from './ForumRead.jsx';
import ForumWrite from './ForumWrite.jsx';

const Forum = () => {
  const dispatch = useDispatch();

  const changeActivity = activity => dispatch(actions.changeActivity(activity));

  const activity = useSelector(store => store.forum.activity);

  return (
    <div>
      <h2>Welcome to the forums (✿ ͜ʖ✿)</h2>
      {activity === 'browse' && 
        <ForumBrowse onClick={changeActivity} />
      }
      {activity === 'read' && 
        <ForumRead onClick={changeActivity}/>
      }
      {activity === 'write' &&
        <ForumWrite onClick={changeActivity} />
      }
    </div>
  );
}

export default Forum;