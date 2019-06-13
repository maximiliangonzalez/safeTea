import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
  changeDisplay: display => {
    dispatch(actions.changeDisplay(display));
  },
  resetDisplay: () => {
    dispatch(actions.resetResults());
  }
});

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(display) {
    this.props.changeDisplay(display);
    this.props.resetDisplay();
  }

  render() {
    return (
      <nav>
        <ul>
          <li><a onClick={() => this.handleClick('safety')}>Safety</a></li>
          <li><a onClick={() => this.handleClick('forum')}>Forum</a></li>
          <li><a /*onClick={() => this.handleClick('forum')}*/>Login</a></li>
        </ul>
      </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);