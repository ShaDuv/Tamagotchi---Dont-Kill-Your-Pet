import React from 'react';
import css from './Styles.css';
import AlexsButton from 'react-bootstrap/Button';
import playIcon from '../../img/playIcon.png';

function PlayButton(props) {

  return (
    <div>
      <AlexsButton variant='light' className='btn' onClick={props.onPlay}>Play
        <img src={playIcon} />
      </AlexsButton>
    </div>
  )
}

export default PlayButton;
