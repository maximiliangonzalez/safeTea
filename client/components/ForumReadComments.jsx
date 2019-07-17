import React, {Component} from 'react';
import ForumReadComment from './ForumReadComment.jsx';

class ForumReadComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null
    }
  }

  componentDidMount() {
    fetch(`/comments/${this.props.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.comments !== null &&
          <div>
            <h4>Comments: </h4>
            {this.state.comments.map(comment => {
              return <ForumReadComment 
                text={comment.text}
                user={comment.username}
                key={`${comment.text.slice(0,15)}${comment.username}`}
              />;
            })}
            {this.props.newComments.map(comment => {
              return <ForumReadComment 
                text={comment.text}
                user={comment.user}
              />
            })
            }
          </div>
        }
      </div>
    );
  }
}

export default ForumReadComments;

