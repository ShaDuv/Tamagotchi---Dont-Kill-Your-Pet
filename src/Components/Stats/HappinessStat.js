import React from 'react';

function HappinessStat(props) {
  return (
    <div>
    <h3>Happiness: {props.statInfo.happiness}</h3>
    </div>
  )
}

export default HappinessStat;
