import React from 'react';
import UpdateScore from './UpdateScore.jsx';
import $ from 'jquery';

const States = {
  main: 'main',
  round: 'round',
  stats: 'stats'
}

class Round extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      view: 'notloaded',
      players: this.props.players,
      holeNumber: 1,
      course: this.props.course,
      scoresAdded: 0,
      gameType: '',
    }
    this.renderTableData = this.renderTableData.bind(this);
    this.renderTableHeader = this.renderTableHeader.bind(this);
    this.addScore = this.addScore.bind(this);
    this.totalScore = this.totalScore.bind(this);
    // this.submitScores = this.submitScores.bind(this);
    this.gameType = this.gameType.bind(this);
  }

  componentDidMount() {
        this.setState({
            view: 'loaded',
        });
  }

  renderTableHeader() {
    const header = ['Player', 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,'Total Score'];
    if (this.state.gameType === '') {
      return header.map(head => {
         return <th key={head}>{head}</th>
      })
    } 
    else if (this.state.gameType === 'matchPlay') {
      header[21] = 'Match Play';
      return header.map(head => {
        return <th key={head}>{head}</th>
     })
    }
    else if (this.state.gameType === 'strokePlay') {
      header[21] = 'Stroke Play';
      return header.map(head => {
        return <th key={head}>{head}</th>
     })
    }
    else if (this.state.gameType === 'skins') {
      header[21] = 'Skins';
      return header.map(head => {
        return <th key={head}>{head}</th>
     })
    }
 }

  renderTableData() {
    if (this.state.gameType === '') {
      return this.state.players.map(player => {
         const { name } = player;
         return (
            <tr key={name + this.state.holeNumber}>
               <td key={name}>{ name }</td>
               <td key='1' id='1'>{player.scores[0]}</td>
               <td key='2' id='2'>{player.scores[1]}</td>
               <td key='3' id='3'>{player.scores[2]}</td>
               <td key='4' id='4'>{player.scores[3]}</td>
               <td key='5' id='5'>{player.scores[4]}</td>
               <td key='6' id='6'>{player.scores[5]}</td>
               <td key='7' id='7'>{player.scores[6]}</td>
               <td key='8' id='8'>{player.scores[7]}</td>
               <td key='9' id='9'>{player.scores[8]}</td>
               <td key='10' id='10'>{player.scores[9]}</td>
               <td key='11' id='11'>{player.scores[10]}</td>
               <td key='12' id='12'>{player.scores[11]}</td>
               <td key='13' id='13'>{player.scores[12]}</td>
               <td key='14' id='14'>{player.scores[13]}</td>
               <td key='15' id='15'>{player.scores[14]}</td>
               <td key='16' id='16'>{player.scores[15]}</td>
               <td key='17' id='17'>{player.scores[16]}</td>
               <td key='18' id='18'>{player.scores[17]}</td>
               <td key='ts' id='totalScore'>{player.scores[18]}</td>
            </tr>
         )
      })
    }
    else if (this.state.gameType === 'strokePlay') {
      return this.state.players.map(player => {
        const { name } = player;
        return (
           <tr key={name + this.state.holeNumber}>
              <td key={name}>{ name }</td>
               <td key='1' id='1'>{player.scores[0]}</td>
               <td key='2' id='2'>{player.scores[1]}</td>
               <td key='3' id='3'>{player.scores[2]}</td>
               <td key='4' id='4'>{player.scores[3]}</td>
               <td key='5' id='5'>{player.scores[4]}</td>
               <td key='6' id='6'>{player.scores[5]}</td>
               <td key='7' id='7'>{player.scores[6]}</td>
               <td key='8' id='8'>{player.scores[7]}</td>
               <td key='9' id='9'>{player.scores[8]}</td>
               <td key='10' id='10'>{player.scores[9]}</td>
               <td key='11' id='11'>{player.scores[10]}</td>
               <td key='12' id='12'>{player.scores[11]}</td>
               <td key='13' id='13'>{player.scores[12]}</td>
               <td key='14' id='14'>{player.scores[13]}</td>
               <td key='15' id='15'>{player.scores[14]}</td>
               <td key='16' id='16'>{player.scores[15]}</td>
               <td key='17' id='17'>{player.scores[16]}</td>
               <td key='18' id='18'>{player.scores[17]}</td>
               <td key='ts' id='totalScore'>{player.scores[18]}</td>
              <td key='sp' id='sp'>{player.scores[19]}</td>
           </tr>
        )
     })
    }
    else if (this.state.gameType === 'matchPlay') {
      return this.state.players.map(player => {
        const { name } = player;
        return (
           <tr key={name + this.state.holeNumber}>
              <td key={name}>{ name }</td>
               <td key='1' id='1'>{player.scores[0]}</td>
               <td key='2' id='2'>{player.scores[1]}</td>
               <td key='3' id='3'>{player.scores[2]}</td>
               <td key='4' id='4'>{player.scores[3]}</td>
               <td key='5' id='5'>{player.scores[4]}</td>
               <td key='6' id='6'>{player.scores[5]}</td>
               <td key='7' id='7'>{player.scores[6]}</td>
               <td key='8' id='8'>{player.scores[7]}</td>
               <td key='9' id='9'>{player.scores[8]}</td>
               <td key='10' id='10'>{player.scores[9]}</td>
               <td key='11' id='11'>{player.scores[10]}</td>
               <td key='12' id='12'>{player.scores[11]}</td>
               <td key='13' id='13'>{player.scores[12]}</td>
               <td key='14' id='14'>{player.scores[13]}</td>
               <td key='15' id='15'>{player.scores[14]}</td>
               <td key='16' id='16'>{player.scores[15]}</td>
               <td key='17' id='17'>{player.scores[16]}</td>
               <td key='18' id='18'>{player.scores[17]}</td>
               <td key='ts' id='totalScore'>{player.scores[18]}</td>
              <td key='mp' id='mp'>{player.scores[20]}</td>
           </tr>
        )
     })
    }
    else if (this.state.gameType === 'skins') {
      return this.state.players.map(player => {
        const { name } = player;
        return (
           <tr key={name + this.state.holeNumber}>
               <td key={name}>{ name }</td>
               <td key='1' id='1'>{player.scores[0]}</td>
               <td key='2' id='2'>{player.scores[1]}</td>
               <td key='3' id='3'>{player.scores[2]}</td>
               <td key='4' id='4'>{player.scores[3]}</td>
               <td key='5' id='5'>{player.scores[4]}</td>
               <td key='6' id='6'>{player.scores[5]}</td>
               <td key='7' id='7'>{player.scores[6]}</td>
               <td key='8' id='8'>{player.scores[7]}</td>
               <td key='9' id='9'>{player.scores[8]}</td>
               <td key='10' id='10'>{player.scores[9]}</td>
               <td key='11' id='11'>{player.scores[10]}</td>
               <td key='12' id='12'>{player.scores[11]}</td>
               <td key='13' id='13'>{player.scores[12]}</td>
               <td key='14' id='14'>{player.scores[13]}</td>
               <td key='15' id='15'>{player.scores[14]}</td>
               <td key='16' id='16'>{player.scores[15]}</td>
               <td key='17' id='17'>{player.scores[16]}</td>
               <td key='18' id='18'>{player.scores[17]}</td>
               <td key='ts' id='totalScore'>{player.scores[18]}</td>
              <td key='skins' id='skins'>{player.scores[21]}</td>
           </tr>
        )
     })
    }
 }

  totalScore(name, scores) {
      let ts = 0;
      let holesPlayed = 0;
      
      for (var i = 0; i <= 17; i++) {
        if (scores[i] !== 0) {
          holesPlayed++;
        }
        ts += Number(scores[i]);
      }
      let currentPar = holesPlayed * 3;
      scores[18] = ts;
      scores[19] = ts - currentPar;
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
         }, () => this.totalScore(name, scores)
         )
     } else {
         this.setState({
           [name]: scores,
           scoresAdded: this.state.scoresAdded + 1
         }, () => this.totalScore(name, scores)
         );
     }
 }

//  matchPlayScores() {
//    let scoresArray = []
//    for (var i = 0; i < this.state.players.length; i++) {
//      scoresArray.push(this.state[this.state.players[i].name])
//    }
//   }


 //will eventually submit scores per hole as they are completed
//  submitScores() {
//   let dataArray = [];
//   for (var i = 0; i < this.state.players.length; i++) {
//     dataArray.push({player: this.state.players[i].name,
//        course: this.state.course, score: this.state[this.state.players[i].name]})
//   }
//   console.log(dataArray);
// //   $.ajax({
// //     type: 'POST',
// //     url: '/scores',
// //     data: dataArray,
// //     sucess: () => {
// //       console.log('Sucess!')
// //     }
// //   })
//  }

 gameType(event) {
  const target = event.target;
  const name = target.name;
  this.setState({
    gameType: `${name}`
  });
 }

  render () {
      if ((this.state.view === 'loaded' 
        && this.state.holeNumber !== 19) 
        && this.state.players.length !== 0) {
          return (
           <div>
                <div>
                    <h3>Course: {this.state.course}</h3>
                    <span className='options'>
                        <button name='strokePlay' className='gameType' onClick={this.gameType} >Stroke Play</button>
                        <button name='matchPlay' className='gameType' onClick={this.gameType} >Match Play</button>
                        <button name='skins' className='gameType' onClick={this.gameType} >Skins</button>
                    </span>
                </div>
                <table>
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
                {this.state.players.map(player => {
                    const { name } = player;
                    return (
                        <UpdateScore name={name} key={name} gameType={this.gameType} 
                          addScore={this.addScore} />
                    )
                })}
            </div>
          )
      } 
      else if (this.state.holeNumber === 19) {
          return (
            <div>
              <h1 className='h1'>Thank you for playing!</h1>
              <button className='submitScores' onClick={this.submitScores}>Please Submit Your Scores</button>
            </div>
        )
      } else {
        return <div className='noPlayers'> Round Has Not Been Started. 
          Please Go Back To The Home Page And Add At Least One Player</div>
      }
  }
};

export default Round;