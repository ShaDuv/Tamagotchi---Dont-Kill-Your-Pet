import React from 'react';
import css from './Styles.css';
import AlexsButton from 'react-bootstrap/Button';
import feedIcon from '../../img/feedIcon.png';

function FeedButton(props) {

  return (
    <div>
      <AlexsButton variant='light' className='btn' onClick={props.onFeed}>Feed
        <img src={feedIcon} />
      </AlexsButton>
    </div>
  )
}

export default FeedButton;
