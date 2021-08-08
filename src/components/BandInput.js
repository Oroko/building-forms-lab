// Add BandInput component
import React, { Component } from 'react'



class BandInput extends Component {
  state = {
    bandName: "",
  };
  handleOnChange = (event) => {
    this.setState({
      bandName: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBandName(this.state);
    this.setState({
      bandName: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <p>
            <label>Band Name</label>
            <input
              type="text"
              name="bandName"
              onChange={this.handleOnChange}
              value={this.state.bandname}
            />
          </p>

          <input type="submit" />
        </form>
        
      </div>
    );
  }
}



export default BandInput
