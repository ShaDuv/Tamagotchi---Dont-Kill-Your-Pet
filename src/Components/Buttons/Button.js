import React from 'react';
import css from './Styles.css';
import AlexsButton from 'react-bootstrap/Button'

function Button(props) {

  return (
    <div>
      <AlexsButton variant='light' className='btn'>{props.button.name}
      <img src={props.button.icon} />
    </AlexsButton>
    </div>
  )
}

export default Button;
