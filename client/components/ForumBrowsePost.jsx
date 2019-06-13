import React, {Component} from 'react';
import * as actions from '../actions/forumActions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  changeActivity: activity => dispatch(actions.changeActivity(activity)),
  fetchAPost: id => dispatch(actions.fetchAPost(id))
});

class ForumBrowsePost extends Component {
  constructor(props) {
    super(props);
    this.goToPost = this.goToPost.bind(this);
  } 


  goToPost(id) {
    this.props.changeActivity('read');
    this.props.fetchAPost(id);
  }

  render() {
    return (
      <div className="post-browsing">
        <h3><a onClick={() => this.goToPost(this.props.postId)}>{this.props.title}</a></h3>
        <p>posted by: {this.props.user}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForumBrowsePost);