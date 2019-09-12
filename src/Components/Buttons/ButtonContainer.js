import React from 'react';
import feedIcon from '../../img/feedIcon.png';
import sleepIcon from '../../img/sleepIcon.png';
import playIcon from '../../img/playIcon.png';
import FeedButton from './FeedButton';
import PlayButton from './PlayButton';
import SleepButton from './SleepButton';

function ButtonContainer(props) {
  return (
    <div className='buttonDiv'>
      <FeedButton onFeed={props.onFeed} />
      <PlayButton onPlay={props.onPlay} />
      <SleepButton onSleep={props.onSleep} />
    </div>
  )
}

export default ButtonContainer;
