import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentPost: state.forum.currentPost
})

class ForumRead extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.onClick('browse')}>Back to browsing</button>
        {this.props.currentPost !== null &&
          <div>
            <h2>{this.props.currentPost.title}</h2>
            <h5>Posted by {this.props.currentPost.username}</h5>
            <p>{this.props.currentPost.text}</p>
          </div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(ForumRead);