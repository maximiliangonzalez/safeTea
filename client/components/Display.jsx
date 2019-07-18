import React from 'react';
import {useSelector} from 'react-redux';
import Safety from './Safety.jsx';
import Forum from './Forum.jsx';

const Display = () =>  {
  const display = useSelector(store => store.safeTea.display);
  
  return (
    <div className="content">
      {display === 'safety' && <Safety />}
      {display === 'forum' && <Forum />}
    </div>
  );
}

export default Display;