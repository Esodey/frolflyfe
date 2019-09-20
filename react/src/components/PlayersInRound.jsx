import React from 'react';


const playerInRound = (props) => (
  <div>
    <h3> Playing This Round: </h3>
    { props.totalPlayers.map(player => {
      const { name } = player;
      return (
        <span className='player' key={name}>{name}, </span> )})
    }
  </div>
)
export default playerInRound;