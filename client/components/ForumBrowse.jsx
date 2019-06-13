import React, {Component} from 'react';
import * as actions from '../actions/forumActions';
import {connect} from 'react-redux';
import ForumBrowsePost from './ForumBrowsePost.jsx';

const mapStateToProps = state => ({
  posts: state.forum.posts
});

const mapDispatchToProps = dispatch => ({
  loadPosts: () => {
    dispatch(actions.fetchPosts());
  }
});

class ForumBrowse extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    return (
      <div>
        <h3>Create a new post: </h3>
        <button onClick={() => this.props.onClick('write')}>Write Post</button>
        <h3>Recent posts:</h3>
        {this.props.posts.map(post => {
          return <ForumBrowsePost 
            user={post.username}
            text={post.text} 
            title={post.title} 
            postId={post.postid}
            key={`${post.text.slice(0,15)}${post.username}`}
          />
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForumBrowse);