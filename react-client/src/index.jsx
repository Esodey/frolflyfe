import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PlayersInRound from './components/PlayersInRound.jsx';
import Round from './components/Round.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPlayer: '',
      players: [],
      course: '',
      view: 'Main'
    }
    this.handleChange = this.handleChange.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.startRound = this.startRound.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
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
    this.state.players.push({name: this.state.currentPlayer, course: this.state.course});
    this.setState({
      currentPlayer: ''
    })
  }

  startRound(event) {
    event.preventDefault();
    this.setState({
      view: 'round'
    })
  }

  render () {
    if (this.state.view === 'Main') {
      return (
        <div className='main'>
          <h1 className='h1'>Frolf Lyfe</h1>
          <h3>Please Enter Your Players and Course</h3>
          <div className='userInput'>
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
              <div>
                <button className='addPlayer' onClick={this.addPlayer}>Submit</button>
                <button className='startRound' onClick={this.startRound}>Start Round!</button>
              </div>
            </form>
            <div className='players'>
              <PlayersInRound totalPlayers={this.state.players}/>
            </div>
          </div>
          <div className='image'>
            <img src='./basket.png' alt="Basket" className='basket'/>
          </div>
        </div>
      )
    }
    if (this.state.view === 'round') {
      return (
        <div>
          <Round players={this.state.players} course={this.state.course}/>
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));