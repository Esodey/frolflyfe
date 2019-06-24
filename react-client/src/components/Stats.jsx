import React from 'react';


class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      value: value
    });
  }

  render() {
      return (
        <div>
            <h1 className='h1'>Frolf Lyfe Stats</h1>
            <img src='./basket.png' alt="Basket" className='image'/>
            <form>
                <label>Please Enter A Players Name:</label>
                <input onChange={this.handleChange}></input>
                <button className='search'>Search</button>
                <div>
                    <label>Please Select Stat:</label>
                    <select></select>
                </div>
            </form>
            <div className='display' >Stats:</div>
        </div>
      )
  }
}

export default Stats;