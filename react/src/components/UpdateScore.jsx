import React from 'react';


class UpdateScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        currentValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      currentValue: value
    });
  }

  render() {
      return (
          <label>{this.props.name}
            <input name={this.props.name}  
              value={this.state.currentValue} 
              placeholder={'Fill In Score'}  
              onChange={this.handleChange} />
          </label> 
      )
  }
}

export default UpdateScore;