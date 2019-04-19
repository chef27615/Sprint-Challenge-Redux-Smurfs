import React, { Component } from 'react'
import { getSmurfs, addSmurf } from "../actions";
import { connect } from 'react-redux';






class Smurfs extends Component {

    componentDidMount(){
        this.props.getSmurfs();
    }



  render() {
      console.log('Smurfs, ', this.props)
      
    return (
      <div>
        {/* {props.smurfs.map((smurf, id)=>{
            <p>{smurf.name}</p>
        })} */}
      </div>
    )
  }
}



const mapStateToProps = state => ({
    Smurfs: state.smurfs
})

export default connect(mapStateToProps, { getSmurfs, addSmurf })(Smurfs);