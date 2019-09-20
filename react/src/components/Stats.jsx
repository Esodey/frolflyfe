import React from 'react';
import PlayerStats from './PlayerStats.jsx';
import $ from 'jquery';

const States = {
  main: 'main',
  round: 'round',
  stats: 'stats'
}

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        value: '',
        playerStats: []
    }
    this.handleChange = this.handleChange.bind(this);
    // this.getStats = this.getStats.bind(this);
  }
  
  handleChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      value: value
    });
  }

  // getStats() {
  //   $.ajax({
  //     type: 'POST',
  //     url: '/scores',
  //     data: this.state.value,
  //     sucess: () => {
  //       console.log('Sucess!')
  //     }
  //   })
  // }
  

  render() {
      return (
        <div>
          <form>
            <label>Please Enter A Players Name:</label>
            <input onChange={this.handleChange}></input>
            <button className='search' onClick={this.getStats}>Search</button>
            <div>
              <label>Please Select Stat:</label>
              <select></select>
            </div>
          </form>
          <div className='display' >Stats:
            <PlayerStats stats={this.state.playerStats} />
          </div>
        </div>
      )
  }
}

export default Stats;