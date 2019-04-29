import React, { Component } from 'react'
import { getSmurfs  } from "../actions";
import { connect } from 'react-redux';
import Smurf from './Smurf';





class Smurfs extends Component {

    componentDidMount(){
        this.props.getSmurfs();
    }



  render() {
    //   console.log('inside Smurfs, ', this.props.smurfs)
      
    return (
      <div>
        {this.props.smurfs.map((smurf, id) => <Smurf smurf={smurf} key={id} />)}
      </div>
    )
  }
}



const mapStateToProps = state => ({
    getSmurfs: state.getSmurfs,
    smurfs: state.smurfs
})

export default connect(mapStateToProps, { getSmurfs })(Smurfs);