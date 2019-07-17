import React, {Component} from 'react';
import { connect } from 'react-redux';
import ForumReadComments from './ForumReadComments.jsx';

const mapStateToProps = state => ({
  currentPost: state.forum.currentPost
})

class ForumRead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      userId: 3,
      newComments: []
    }
    this.sendComment = this.sendComment.bind(this);
    this.updateText = this.updateText.bind(this);
  }

  updateText(e) {
    this.setState({
      comment: e.target.value
    });
  }

  sendComment() {
    fetch(`/comments/${this.props.currentPost.postid}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({comment: this.state.comment, userId: this.state.userId})
    })
    .then(res => res.json())
    .then(data => {
      console.log('lady datah', data)
      this.setState({
        // we only have access to the userId because there's no real authentication.
        // if there were more robustly implemented authentication, we could store all user info in state upon login
        // that we we'd actually be able to display the username above a comment instead of just their id as i'm doing now
        // so fixing this specific error will take a huge amount of refactoring, but it's refactoring that's necessary
        newComments: [...this.state.newComments, {text: this.state.comment, user: this.state.userId}]
      })
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.onClick('browse')}>Back to browsing</button>
        {this.props.currentPost !== null &&
          <div>
            <h2>{this.props.currentPost.title}</h2>
            <h4>Posted by {this.props.currentPost.username}</h4>
            <p>{this.props.currentPost.text}</p>
            <br />
            <h5>leave a friendly or informative comment (❁´◡`❁)</h5>
            <br />
            <textarea className="comment" onChange={e => this.updateText(e)}></textarea>
            <br />
            <button onClick={this.sendComment}>Submit!</button>
            <ForumReadComments id={this.props.currentPost.postid} newComments={this.state.newComments}/>
          </div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(ForumRead);