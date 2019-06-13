import React, {Component} from 'react';

class InfoCardSegment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let status;
    if (this.props.answer === 'no') {
      status = "No ❌";
    } else if (this.props.answer === 'death') {
      status = "No: Death Penalty ❌💀❌"
    } else if (this.props.answer === 'complicated') {
      status = "Complicated, Partially, or Unknown ❓"
    } else if (this.props.answer === 'yes') {
      status = "Yes! ✅"
    }

    return (
      <div>
        <h3>{this.props.question}</h3>
        <p>{status}</p>
        {this.props.text !== '' &&
          <p>{this.props.text}</p>
        }
      </div>
    );
  }
}

export default InfoCardSegment;