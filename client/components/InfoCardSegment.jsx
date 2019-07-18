import React from 'react';

const InfoCardSegment = ({question, answer, text}) => {
  let status;
  if (answer === 'no') {
    status = "No ❌";
  } else if (answer === 'death') {
    status = "No: Death Penalty ❌💀❌"
  } else if (answer === 'complicated') {
    status = "Complicated, Partially, or Unknown ❓"
  } else if (answer === 'yes') {
    status = "Yes! ✅"
  }

  return (
    <div>
      <h3>{question}</h3>
      <p>{status}</p>
      {text !== '' &&
        <p>{text}</p>
      }
    </div>
  );
}

export default InfoCardSegment;