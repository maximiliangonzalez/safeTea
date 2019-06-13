import React, {Component} from 'react';
import Banner from './Banner.jsx';
import Display from './Display.jsx';

class App extends Component {
  render() { 
    return (
      <div>
        <Banner />
        <Display />
      </div>
    );
  }
}

export default App;