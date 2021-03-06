import React, { Component } from 'react'

import { deleteSmurf } from '../actions';
import { connect } from 'react-redux';

class Smurf extends Component {
    
  componentDidMount(){
      this.props.deleteSmurf()
  }

  
    render() {
      console.log('inside smurf', this.props)

      const {age, height, name, id}= this.props.smurf;
    return (
      <div>
        <h2>{name}</h2>
        <p>{age}</p>
        <p>{height}</p>
        <button
            onClick={()=>this.props.deleteSmurf(id)}
        >Gargamel</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
    (console.log('map-inside-smurf-map, ', state))
    return{
    deleteSmurf: state.deleteSmurf,
    smurfs: state.smurfs}
}
    


export default connect(mapStateToProps, {deleteSmurf} )(Smurf);