import React from 'react';
import Stat from './Stat';
import css from './Styles.css'


function StatContainer() {
  const statInfo = [
    {
      id: 1,
      type: 'Happiness',
      level: 50
    },

    {
      id: 2,
      type: 'Hunger',
      level: 50
    },

    {
      id: 3,
      type: 'Enery',
      level: 50
    }
  ]

  const statList = statInfo.map(stat => <Stat key={stat.id} stat = {stat}/>);
  return (
    <div>
      <div className='sectionHeader'> <h1> Creature Stats </h1></div>

      {statList}
    </div>
  )
}

export default StatContainer;
