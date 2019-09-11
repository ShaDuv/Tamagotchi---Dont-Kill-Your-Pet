import React from 'react';
import Button from './Button';
import feedIcon from '../../img/feedIcon.png';
import sleepIcon from '../../img/sleepIcon.png';
import playIcon from '../../img/playIcon.png';

function ButtonContainer() {
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

  const buttonList = buttonInfo.map(button => <Button key={button.id} button = {button}/>);

  return (
    <div className='buttonDiv'>
      {buttonList}
    </div>
  )
}

export default ButtonContainer;
