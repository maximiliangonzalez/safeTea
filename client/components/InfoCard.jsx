import React, {Component} from 'react';
import InfoCardSegment from './InfoCardSegment.jsx';

function cleanText(text) {
  return text.replace(/^(\w)/, (match, $1) => $1.toUpperCase()).replace(/_(\w)/g, (match, $1) => ` ${$1.toUpperCase()}`);
}

class InfoCard extends Component {
  constructor(props) {
    super(props);
    this.getText = this.getText.bind(this);
  }

  getText(prop) {
    return this.props.data.hasOwnProperty(prop) ? this.props.data[prop] : '';
  }

  render() {
    if (this.props.data === 'no data') {
      return <h1>No data found</h1>
    }
    return (
      <div className='card'>
        <h1>{cleanText(this.props.data.country)}</h1>
        {this.props.data.hasOwnProperty('sameSexSexualActivityStatus') &&
          <InfoCardSegment 
            question="Is same sex sexual activity legal?"
            answer={this.props.data.sameSexSexualActivityStatus}
            text={this.getText('sameSexSexualActivityText')}
          />
        }
        {this.props.data.hasOwnProperty('sameSexUnionRecognitionStatus') &&
          <InfoCardSegment
            question="Are same sex unions legally recognized?"
            answer={this.props.data.sameSexUnionRecognitionStatus}
            text={this.getText('sameSexUnionRecognitionText')}
          />
        }
        {this.props.data.hasOwnProperty('sameSexMarriageStatus') &&
          <InfoCardSegment
            question="Are same sex marriages legally recognized?"
            answer={this.props.data.sameSexMarriageStatus}
            text={this.getText('sameSexMarriageText')}
          />
        }
        {this.props.data.hasOwnProperty('adoptionBySameSexCouplesStatus') &&
          <InfoCardSegment
            question="Can same sex couples adopt children?"
            answer={this.props.data.adoptionBySameSexCouplesStatus}
            text={this.getText('adoptionBySameSexCouplesText')}
          />
        }
        {this.props.data.hasOwnProperty('antiDiscriminationStatus') &&
          <InfoCardSegment
            question="Are there anti-discrimination laws against LGBT people?"
            answer={this.props.data.antiDiscriminationStatus}
            text={this.getText('antiDiscriminationText')}
          />
        }
        {this.props.data.hasOwnProperty('genderIdentityRecognitionStatus') &&
          <InfoCardSegment 
            question="Are transgender people's identities legally recognized?"
            answer={this.props.data.genderIdentityRecognitionStatus}
            text={this.getText('genderIdentityRecognitionText')}
          />
        }
      </div>
    );
  }
}

export default InfoCard;