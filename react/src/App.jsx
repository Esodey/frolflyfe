import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PlayersInRound from './components/PlayersInRound.jsx';
import Round from './components/Round.jsx'
import Stats from './components/Stats.jsx';

const States = {
  main: 'main',
  round: 'round',
  stats: 'stats'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPlayer: '',
      players: [],
      course: '',
      view: States.main
    }
    this.handleChange = this.handleChange.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/items', 
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  addPlayer(event) {
    event.preventDefault();
    this.state.players.push({
      name: this.state.currentPlayer, 
      course: this.state.course,
      scores: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      matchTotal: 0,
      strokeTotal: 0,
      skinsTotal: 0
    })
    this.setState({
      currentPlayer: ''
    });
  }

  changeView(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    this.setState({
      view: name
    });
  }


  render () {
    let view;
    if (this.state.view === States.main) {
      view = 
        <div className='userInput'>
          <div>
            <h3>Please Enter Your Players and Course</h3>
          </div>
          <form>
            <label>Player:
              <input 
                name='currentPlayer' 
                value={this.state.currentPlayer} 
                type='text'
                onChange={this.handleChange}>
              </input>
            </label>
            <label>Course:
              <input 
                name='course' 
                value={this.state.course} 
                type='text' 
                onChange={this.handleChange}>
              </input>
            </label>
            <button className='addPlayer' onClick={this.addPlayer}>Submit</button>
          </form>
          <div className='players'>
            <PlayersInRound totalPlayers={this.state.players}/>
          </div>
          <button 
            className='startRound' 
            name={States.round} 
            onClick={this.changeView}>Start Round!
          </button>
        </div>
    }
    else if (this.state.view === States.round) {
      view = 
        <div>
          <Round players={this.state.players} course={this.state.course}
            changeView={this.changeView} />
        </div>
    }
    else if (this.state.view === States.stats) {
      view = 
        <div>
          <Stats changeView={this.changeView}/>
        </div>
    }

    return (
      <div className='main'>
        <div className='title'>
          <h1 className='h1'>Frolf Lyfe</h1>
        </div>
        <div className='navBar'>
          <button className='tab' name={States.main} onClick={this.changeView}>Home</button>
          <button className='tab' name={States.round} onClick={this.changeView}>Round</button>
          <button className='tab' name={States.stats} onClick={this.changeView}>Stats</button>
        </div>
        <div className='body'>
          <div className='image'>
            <img src='./basket.png' alt="Basket" className='basket'/>
          </div>
          {view}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));