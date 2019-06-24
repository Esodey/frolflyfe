import React from 'react';


class UpdateScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        currentValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.addScore = this.addScore.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      currentValue: value
    });
  }

  addScore() {
      this.props.addScore(this.props.name, this.state.currentValue);
  }

  render() {
      return (
        <div>
            <input name={this.props.name}  value={this.state.currentValue} placeholder={this.props.name + `'s Score`} onChange={this.handleChange}></input>
            <button className='scores' onClick={this.addScore}>Add Score</button>
        </div>      
      )
  }
}

export default UpdateScore;