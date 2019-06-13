import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import Home from './Home.jsx';
import InfoCards from './InfoCards.jsx';

const mapStateToProps = state => ({
  result: state.safeTea.request.result
});

const mapDispatchToProps = dispatch => ({
  queryDB: endpoint => dispatch(actions.queryDB(endpoint))
});

class Safety extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      right: '',
      with: true
    }
    this.updateText = this.updateText.bind(this);
    this.getCountry = this.getCountry.bind(this);
    this.updateSelect = this.updateSelect.bind(this);
    this.getRight = this.getRight.bind(this);
    this.updateRadio = this.updateRadio.bind(this);
  }

  updateText(e) {
    this.setState({
      country: e.target.value.toLowerCase().split(' ').join('_'),
    }, () => {
      if (this.state.country !== '') {
        const endpoint = `/country/${this.state.country}`;
        this.props.queryDB(endpoint);
      }
    });
  }

  getCountry(e) {
    e.preventDefault();
    const endpoint = `/country/${this.state.country}`;
    this.props.queryDB(endpoint);
  }

  updateSelect(e) {
    this.setState({
      right: e.target.value
    });
  }

  getRight(e) {
    e.preventDefault();
    const endpoint = `/right/${this.state.right}${this.state.with ? '' : '/whack'}`;
    this.props.queryDB(endpoint);
  }

  updateRadio(e) {
    this.setState({
      with: e.target.value === 'true' ? true : false
    });
  }

  render() {
    return (
      <div>
      <div className="form-container">
        <form>
          <h3>Welcome to safeTea (♥◡♥)</h3>
          <h2>Search for info about a country: </h2>
          <input type="text" onChange={this.updateText}/>
          <button onClick={this.getCountry}>Search Countries</button>
          <h2>Or search by specific rights: </h2>
          <select onChange={this.updateSelect} defaultValue="Select a right">
            <option value="Select a right" disabled>Select a right</option>
            <option value="sexualActivity">Same Sex Sexual Activity</option>
            <option value="unionRecognition">Same Sex Union Recognition</option>
            <option value="marriage">Same Sex Marriage</option>
            <option value="adoption">Same Sex Adoption</option>
            <option value="antiDiscrimination">LGBT Antidiscrimination</option>
            <option value="genderIdentity">Gender Identity Recognition</option>
          </select>
          <button disabled={this.state.right === '' ? true : false} onClick={this.getRight}>
            Search Rights
          </button>
          <br />
          Countries with this right:
          <input type="radio" name="not" value="true" onChange={this.updateRadio} />
          <br></br>
          Countries without this right:
          <input type="radio" name="not" value="false" onChange={this.updateRadio} />
        </form>
      </div>
      {(this.props.result === null) && <Home /> }
      {(this.props.result !== null) && <InfoCards result={this.props.result}/>}
    </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Safety);