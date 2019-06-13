import React, {Component} from 'react';
import {connect} from 'react-redux';
import Safety from './Safety.jsx';
import Forum from './Forum.jsx';

const mapStateToProps = store => ({
  display: store.safeTea.display
});

const mapDispatchToProps = dispatch => ({
  
});

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        {this.props.display === 'safety' && <Safety />}
        {this.props.display === 'forum' && <Forum />}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);