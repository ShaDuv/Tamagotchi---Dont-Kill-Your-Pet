import React from 'react';
import css from './Styles.css'

function Display (props) {
  return (
    <div>
      <img src={props.display} />
    </div>
  )
}
export default Display;
