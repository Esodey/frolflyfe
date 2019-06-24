import React from 'react';
import UpdateScore from './UpdateScore.jsx';


class Round extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      view: 'notloaded',
      players: this.props.players,
      holeNumber: 1,
      course: this.props.course,
      scoresAdded: 0
    }
    this.renderTableData = this.renderTableData.bind(this);
    this.renderTableHeader = this.renderTableHeader.bind(this);
    this.addScore = this.addScore.bind(this);
    this.totalScore = this.totalScore.bind(this);
  }

  // go back and refactor to hash
  componentDidMount() {
    this.state.players.map(player => {
        const { name } = player;
        this.setState({
            view: 'loaded',
            [name]: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        });
    })
  }

  renderTableHeader() {
      const header = ['Player', 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,'Total Score'];
    return header.map(head => {
       return <th key={head}>{head}</th>
    })
 }

  renderTableData() {
    return this.state.players.map(player => {
       const { name } = player;
       return (
          <tr key={name + this.state.holeNumber}>
             <td key={name}>{ name }</td>
             <td key='1' id='1'>{this.state[name][0]}</td>
             <td key='2' id='2'>{this.state[name][1]}</td>
             <td key='3' id='3'>{this.state[name][2]}</td>
             <td key='4' id='4'>{this.state[name][3]}</td>
             <td key='5' id='5'>{this.state[name][4]}</td>
             <td key='6' id='6'>{this.state[name][5]}</td>
             <td key='7' id='7'>{this.state[name][6]}</td>
             <td key='8' id='8'>{this.state[name][7]}</td>
             <td key='9' id='9'>{this.state[name][8]}</td>
             <td key='10' id='10'>{this.state[name][9]}</td>
             <td key='11' id='11'>{this.state[name][10]}</td>
             <td key='12' id='12'>{this.state[name][11]}</td>
             <td key='13' id='13'>{this.state[name][12]}</td>
             <td key='14' id='14'>{this.state[name][13]}</td>
             <td key='15' id='15'>{this.state[name][14]}</td>
             <td key='16' id='16'>{this.state[name][15]}</td>
             <td key='17' id='17'>{this.state[name][16]}</td>
             <td key='18' id='18'>{this.state[name][17]}</td>
             <td key='ts' id='totalScore'>{this.state[name][18]}</td>
          </tr>
       )
    })
 }

  totalScore(name, scores) {
      let ts = 0;
      for (var i = 0; i < scores.length - 2; i++) {
        ts += Number(scores[i]);
      }
      
      scores[scores.length - 1] = ts;
      this.setState({
          [name] : scores
      });
  }

 addScore(name, score) {
     const scores = [...this.state[name]];
     scores[this.state.holeNumber - 1] = score;
     if (this.state.scoresAdded === this.state.players.length -1) {
         this.setState({
            [name]: scores,
            holeNumber: this.state.holeNumber + 1,
            scoresAdded: 0
         }, () => this.totalScore(name, scores))
     } else {
         this.setState({
           [name]: scores,
           scoresAdded: this.state.scoresAdded + 1
         }, () => this.totalScore(name, scores));
     }
 }

  render () {
      if (this.state.view === 'loaded' && this.state.holeNumber !== 19) {
          return (
            <div>
                <h1 className='h1'>Frolf Lyfe</h1>
                <div className='image'>
                    <img src='./basket.png' alt="Basket" className='basket'/>
                </div>
                <h3>Course: {this.state.course}</h3>
                <table>
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
                {this.state.players.map(player => {
                    const { name } = player;
                    return (
                        <UpdateScore name={name} key={name} addScore={this.addScore} />
                    )
                })}
            </div>
          )
      } 
      else if (this.state.holeNumber === 19) {
          return (
            <div>
              <h1 className='h1'>Thank you for playing!</h1>
              <button className='submitScores'>Please Submit Your Scores</button>
            </div>
        )
      } else {
        return (
          <div></div>
        )
      }
  }
};

export default Round;