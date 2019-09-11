import React from 'react';

function Stat(props) {
  return (
    <div>
    <p>{props.stat.type}: {props.stat.level} </p>
    </div>
  )
}

export default Stat;
