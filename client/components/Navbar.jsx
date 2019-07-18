import React, {Component} from 'react';
import {useDispatch} from 'react-redux';
import * as actions from '../actions/actions';

const Navbar = () => {
  const dispatch = useDispatch();
  const changeDisplay = display => dispatch(actions.changeDisplay(display));
  const resetDisplay = () => dispatch(actions.resetResults());

  const handleClick = display => {
    changeDisplay(display);
    resetDisplay();
  }

  return (
    <nav>
      <ul>
        <li><a onClick={() => handleClick('safety')}>Safety</a></li>
        <li><a onClick={() => handleClick('forum')}>Forum</a></li>
        <li><a /*onClick={() => handleClick('login')}*/>Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;