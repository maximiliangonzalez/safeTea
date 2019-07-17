import React, {Component} from 'react';

class ForumReadComment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.user}</h3>
        <p>{this.props.text}</p>
        <hr />
      </div>
    );
  }
}

export default ForumReadComment;