import React, {Component} from 'react';

function cleanText(text) {
  return text.replace(/^(\w)/, (match, $1) => $1.toUpperCase()).replace(/_(\w)/g, (match, $1) => ` ${$1.toUpperCase()}`);
}

class InfoCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{cleanText(this.props.data.country)}</h1>
        {this.props.data.hasOwnProperty('sameSexSexualActivityStatus') &&
          <div>
            <h3>Is same sex sexual activity legal?</h3>
            <p>{this.props.data.sameSexSexualActivityStatus === 'no' ? 'No!' : this.props.data.sameSexSexualActivityStatus === 'death' ? 'No! Death penalty!' : this.props.data.sameSexSexualActivityStatus === 'complicated' ? 'Complicated or unknown' : 'Yes!'}</p>
          </div>
        }
        {this.props.data.hasOwnProperty('sameSexSexualActivityText') && this.props.data['sameSexSexualActivityText'] !== '' &&
          <p>{this.props.data.sameSexSexualActivityText}</p>
        }
        {this.props.data.hasOwnProperty('sameSexUnionRecognitionStatus') &&
          <div>
            <h3>Are same sex unions legally recognized?</h3>
            <p>{this.props.data.sameSexUnionRecognitionStatus === 'no' ? 'No!' : this.props.data.sameSexUnionRecognitionStatus === 'complicated' ? 'Complicated or unknown' : 'Yes!'}</p>
          </div>
        }
        {this.props.data.hasOwnProperty('sameSexUnionRecognitionText') && this.props.data['sameSexUnionRecognitionText'] !== '' &&
          <p>{this.props.data.sameSexUnionRecognitionText}</p>
        }
        {this.props.data.hasOwnProperty('sameSexMarriageStatus') &&
          <div>
            <h3>Are same sex marriages legally recognized?</h3>
            <p>{this.props.data.sameSexMarriageStatus === 'no' ? 'No!' : this.props.data.sameSexMarriageStatus === 'complicated' ? 'Complicated or unknown' : 'Yes!'}</p>
          </div>
        }
        {this.props.data.hasOwnProperty('sameSexMarriageText') && this.props.data['sameSexMarriageText'] !== '' &&
          <p>{this.props.data.sameSexMarriageText}</p>
        }
        {this.props.data.hasOwnProperty('adoptionBySameSexCouplesStatus') &&
          <div>
            <h3>Can same sex couples adopt children?</h3>
            <p>{this.props.data.adoptionBySameSexCouplesStatus === 'no' ? 'No!' : this.props.data.adoptionBySameSexCouplesStatus === 'complicated' ? 'Complicated or unknown' : 'Yes!'}</p>
          </div>
        }
        {this.props.data.hasOwnProperty('adoptionBySameSexCouplesText') && this.props.data['adoptionBySameSexCouplesText'] !== '' && 
          <p>{this.props.data.adoptionBySameSexCouplesText}</p>
        }
        {this.props.data.hasOwnProperty('antiDiscriminationStatus') &&
          <div>
            <h3>Are there anti-discrimination laws against LGBT people?</h3>
            <p>{this.props.data.antiDiscriminationStatus === 'no' ? 'No!' : this.props.data.antiDiscriminationStatus === 'complicated' ? 'Complicated or unknown' : 'Yes!'}</p>
          </div>
        }
        {this.props.data.hasOwnProperty('antiDiscriminationText') && this.props.data['antiDiscriminationText'] !== '' &&
          <p>{this.props.data.antiDiscriminationText}</p>
        }
        {this.props.data.hasOwnProperty('genderIdentityRecognitionStatus') &&
          <div>
            <h3>Are trangender people's identities legally recognized?</h3>
            <p>{this.props.data.genderIdentityRecognitionStatus === 'no' ? 'No!' : this.props.data.genderIdentityRecognitionStatus === 'complicated' ? 'Complicated or unknown' : 'Yes!'}</p>
          </div>
        }
        {this.props.data.hasOwnProperty('genderIdentityRecognitionText') && this.props.data['genderIdentityRecognitionText'] !== '' && 
          <p>{this.props.data.genderIdentityRecognitionText}</p>
        }
      </div>
    );
  }
}

export default InfoCard;