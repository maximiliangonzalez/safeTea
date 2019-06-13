import React, {Component} from 'react';
import InfoCard from './InfoCard.jsx'

class InfoCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {(this.props.result instanceof Array && this.props.result.length !== 0) &&
          this.props.result.map(country => {
            return <InfoCard data={country} key={country.country}/>;
          })
        }
        {!(this.props.result instanceof Array) && 
          <InfoCard data={this.props.result}/>
        }
        {
          (this.props.result instanceof Array && this.props.result.length === 0) &&
          <h1>No data found</h1>
        }
      </div>
    );
  }
}

export default InfoCards;