import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../actions/actions';
import Home from './Home.jsx';
import InfoCards from './InfoCards.jsx';

const Safety = () => {
  const [country, setCountry] = useState('');
  const [right, setRight] = useState('');
  const [hasRight, setHasRight] = useState(true);

  const result = useSelector(store => store.safeTea.request.result);

  const dispatch = useDispatch();
  const queryDB = endpoint => dispatch(actions.queryDB(endpoint));

  const updateText = e => {
    setCountry(e.target.value.toLowerCase().split(' ').join('_'));
  }

  useEffect(
    () => {
      if (country !== '') {
        queryDB(`/country/${country}`);
      }
    },
    [country]
  );

  const getCountry = e => {
    e.preventDefault();
    queryDB(`/country/${country}`);
  }

  const updateSelect = e => {
    setRight(e.target.value);
  }

  const getRight = e => {
    e.preventDefault();
    queryDB(`/right/${right}${hasRight ? '' : '/whack'}`);
  }

  const updateRadio = e => {
    setHasRight(e.target.value === 'true' ? true : false)
  }

  return (
    <div>
    <div className="form-container">
      <form>
        <h3>Welcome to safeTea (♥◡♥)</h3>
        <h2>Search for info about a country: </h2>
        <input type="text" onChange={updateText}/>
        <button onClick={getCountry}>Search Countries</button>
        <h2>Or search by specific rights: </h2>
        <select onChange={updateSelect} defaultValue="Select a right">
          <option value="Select a right" disabled>Select a right</option>
          <option value="sexualActivity">Same Sex Sexual Activity</option>
          <option value="unionRecognition">Same Sex Union Recognition</option>
          <option value="marriage">Same Sex Marriage</option>
          <option value="adoption">Same Sex Adoption</option>
          <option value="antiDiscrimination">LGBT Antidiscrimination</option>
          <option value="genderIdentity">Gender Identity Recognition</option>
        </select>
        <button disabled={right === '' ? true : false} onClick={getRight}>
          Search Rights
        </button>
        <br />
        Countries with this right:
        <input type="radio" name="not" value="true" onChange={updateRadio} />
        <br />
        Countries without this right:
        <input type="radio" name="not" value="false" onChange={updateRadio} />
      </form>
    </div>
    {(result === null) && <Home /> }
    {(result !== null) && <InfoCards result={result}/>}
  </div>
  );
}

export default Safety;