import React from 'react';
import css from './Styles.css';
import AlexsButton from 'react-bootstrap/Button';
import sleepIcon from '../../img/sleepIcon.png';

function SleepButton(props) {

  return (
    <div>
      <AlexsButton variant='light' className='btn' onClick={props.onSleep}>Sleep
        <img src={sleepIcon} />
      </AlexsButton>
    </div>
  )
}

export default SleepButton;
