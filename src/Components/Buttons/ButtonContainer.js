import React from 'react';
import feedIcon from '../../img/feedIcon.png';
import sleepIcon from '../../img/sleepIcon.png';
import playIcon from '../../img/playIcon.png';
import FeedButton from './FeedButton';
import PlayButton from './PlayButton';
import SleepButton from './SleepButton';

function ButtonContainer(props) {
  const buttonInfo = [
    {
      id: 1,
      name: 'Feed',
      statMods: {
        happiness: 2,
        fullness: 4,
        energy: 2
      },
      icon: feedIcon
    },

    {
      id: 2,
      name: 'Play',
      statMods: {
        happiness: 4,
        fullness: -2,
        energy: -3
      },
      icon: playIcon
    },

    {
      id: 3,
      name: 'Sleep',
      statMods: {
        happiness: 1,
        fullness: -2,
        energy: 4
      },
      icon: sleepIcon
    }
  ]


  return (
    <div className='buttonDiv'>
      <FeedButton onFeed={props.onFeed} />
      <PlayButton onPlay={props.onPlay} />
      <SleepButton onSleep={props.onSleep} />
    </div>
  )
}

export default ButtonContainer;
