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
        {/* {console.log(this.props.result)} */}
        {this.props.result instanceof Array &&
          this.props.result.map(country => {
            console.log(country)
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