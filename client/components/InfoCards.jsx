import React from 'react';
import InfoCard from './InfoCard.jsx'

const InfoCards = ({result}) => (
  <>
    {(result instanceof Array && result.length !== 0) &&
      result.map(country => {
        return <InfoCard data={country} key={country.country}/>;
      })
    }
    {!(result instanceof Array) && 
      <InfoCard data={result}/>
    }
    {
      (result instanceof Array && result.length === 0) &&
      <h1>No data found</h1>
    }
  </>
);

export default InfoCards;