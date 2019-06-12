import React, {Component} from 'react';
import Banner from './Banner.jsx';
import Navbar from './Navbar.jsx';
import Display from './Display.jsx';

class App extends Component {
  render() { 
    return (
      <div>
        <Banner />
        <Navbar />
        <Display />
      </div>
    );
  }
}

export default App;