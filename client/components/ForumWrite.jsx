import React, {Component} from 'react';

class ForumWrite extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.changeText = this.changeText.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.state = {
      title: '',
      text: '',
      userId: 3
    }
  }

  changeText(e) {
    this.setState({
      text: e.target.value
    });
  }
  
  changeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  submit() {
    fetch('/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        text: this.state.text,
        userId: this.state.userId
      })
    })
    .catch(err => console.log(err));
    this.props.onClick('browse');
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.onClick('browse')}>Back to browsing</button>
        <br />
        Title:
        <br />
        <input type="text" onChange={e => this.changeTitle(e)}></input>
        <br />
        Post: 
        <br />
        <textarea onChange={e => this.changeText(e)}></textarea>
        <br />
        Tags (comma separated):
        <input type="text"></input>
        <br />
        <button onClick={() => this.submit()}>Submit!</button>
      </div>
    );
  }
}

export default ForumWrite;