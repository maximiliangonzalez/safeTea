import React, {Component} from 'react';
import Navbar from './Navbar.jsx';

class Banner extends Component {
  render() {
    return (
      <header>
        <h1>~ safeTea ~</h1>
        <Navbar />
      </header>
    );
  }
}

export default Banner;