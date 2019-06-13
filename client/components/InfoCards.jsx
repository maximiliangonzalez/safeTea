import React, {Component} from 'react';
import InfoCard from './InfoCard.jsx'

class InfoCards extends Component {
  constructor(props) {
    super(props);
  }

  // render() {
  //   return (
  //     <div>
  //       {JSON.stringify(this.props.result)}
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        {this.props.result instanceof Array &&
          this.props.result.map(country => {
            return <InfoCard data={country} key={country.country}/>;
          })
        }
        {!(this.props.result instanceof Array) && 
          <InfoCard data={this.props.result}/>
        }
      </div>
    );
  }
}

export default InfoCards;