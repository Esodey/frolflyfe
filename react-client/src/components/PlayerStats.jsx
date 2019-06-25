import React from 'react';


const PlayerStats = (props) => (
  <div>
    { props.stats.map(stat => {
      return (
        <span className='player' key={stat}>{stat}, </span> )})
    }
  </div>
)
export default PlayerStats;