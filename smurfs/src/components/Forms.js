import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class Forms extends Component {

state={
  smurf:{
    name:'',
    age:'',
    height:''
  }
}

handleChange = e => {
  console.log(e.target.name, e.target.value)
  this.setState({
    [e.target.name]:e.target.value
  })
}

addSmurf = e => {
 e.preventDefault();
 this.props.addSmurf(this.state.smurf);
 this.setState({
    name:'',
    age:'',
    height:''
 })
}

  render() {
    return (
      <form onSubmit = {this.addSmurf} >
        <input 
          input='text'
          name='name'
          placeholder='name'
          value={this.state.smurf.name}
          onChange={this.handleChange}
        />

        <input 
          input='text'
          name='age'
          placeholder='age'
          value={this.state.smurf.age}
          onChange={this.handleChange}
        />

        <input 
          input='text'
          name='height'
          placeholder='height'
          value={this.state.smurf.height}
          onChange={this.handleChange}
        />

        <button>add</button>
      </form>
    )
  }
}
const mapStateToProps = state => {
  return{
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { addSmurf })(Forms)