import React, { Component } from 'react'
import BandInput from "../components/BandInput";
import Band from '../components/Band'
import { connect } from "react-redux";

class BandsContainer extends Component {
  
  render() {
    return (
      <div>
        <BandInput addBandName={this.props.addBandName}/>
        <Band bands={this.props.bands}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBandName: (formData) =>
      dispatch({ type: "ADD_BANDNAME", payload: formData }),
  };
};




export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer)
