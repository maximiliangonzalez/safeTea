import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/forumActions';

import ForumBrowse from './ForumBrowse.jsx';
import ForumRead from './ForumRead.jsx';
import ForumWrite from './ForumWrite.jsx';

const mapStateToProps = state => ({
  activity: state.forum.activity
});

const mapDispatchToProps = dispatch => ({
  changeActivity: activity => {
    dispatch(actions.changeActivity(activity));
  }
});

class Forum extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Welcome to the forums (✿ ͜ʖ✿)</h2>
        {this.props.activity === 'browse' && 
          <ForumBrowse onClick={this.props.changeActivity} />
        }
        {this.props.activity === 'read' && 
          <ForumRead onClick={this.props.changeActivity}/>
        }
        {this.props.activity === 'write' &&
          <ForumWrite onClick={this.props.changeActivity} />
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Forum);