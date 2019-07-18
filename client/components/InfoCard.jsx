import React from 'react';
import InfoCardSegment from './InfoCardSegment.jsx';

function cleanText(text) {
  return text
    .replace(/^(\w)/, (match, $1) => $1.toUpperCase())
    .replace(/_(\w)/g, (match, $1) => ` ${$1.toUpperCase()}`);
}

const InfoCard = ({data}) => {
  const getText = prop => {
    return data.hasOwnProperty(prop) ? data[prop] : '';
  }

  if (data === 'no data') {
    return <h1>No data found</h1>
  }
  return (
    <div className='card'>
      <h1>{cleanText(data.country)}</h1>
      {data.hasOwnProperty('sameSexSexualActivityStatus') &&
        <InfoCardSegment 
          question="Is same sex sexual activity legal?"
          answer={data.sameSexSexualActivityStatus}
          text={getText('sameSexSexualActivityText')}
        />
      }
      {data.hasOwnProperty('sameSexUnionRecognitionStatus') &&
        <InfoCardSegment
          question="Are same sex unions legally recognized?"
          answer={data.sameSexUnionRecognitionStatus}
          text={getText('sameSexUnionRecognitionText')}
        />
      }
      {data.hasOwnProperty('sameSexMarriageStatus') &&
        <InfoCardSegment
          question="Are same sex marriages legally recognized?"
          answer={data.sameSexMarriageStatus}
          text={getText('sameSexMarriageText')}
        />
      }
      {data.hasOwnProperty('adoptionBySameSexCouplesStatus') &&
        <InfoCardSegment
          question="Can same sex couples adopt children?"
          answer={data.adoptionBySameSexCouplesStatus}
          text={getText('adoptionBySameSexCouplesText')}
        />
      }
      {data.hasOwnProperty('antiDiscriminationStatus') &&
        <InfoCardSegment
          question="Are there anti-discrimination laws against LGBT people?"
          answer={data.antiDiscriminationStatus}
          text={getText('antiDiscriminationText')}
        />
      }
      {data.hasOwnProperty('genderIdentityRecognitionStatus') &&
        <InfoCardSegment 
          question="Are transgender people's identities legally recognized?"
          answer={data.genderIdentityRecognitionStatus}
          text={getText('genderIdentityRecognitionText')}
        />
      }
    </div>
  );
}

export default InfoCard;