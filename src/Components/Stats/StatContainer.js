import React from 'react';
import HappinessStat from './HappinessStat';
import EnergyStat from './EnergyStat';
import FullnessStat from './FullnessStat';
import css from './Styles.css'


function StatContainer(props) {
  return (
    <div>
      <div className='sectionHeader'>
        <h1> Creature Stats </h1></div>
        <HappinessStat statInfo = {props.statInfo} />
        <EnergyStat statInfo = {props.statInfo}/>
        <FullnessStat statInfo = {props.statInfo}/>



    </div>
  )
}

export default StatContainer;
