import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class Forms extends Component {

state={
  smurf:{
    name:'',
    age:'',
    height:'',
    id: '',
    isloading: false,
    error: null
  }
}


componentDidMount(){
  this.props.addSmurf()
}




handleChange = e => {
  console.log(e.target.name, e.target.value, 'in handleChange',this.state.smurf)
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
  height:'',
  id: '',
  isloading: false,
  error: null
 })
}

  render() {
    console.log('in render', this.state.smurf)
    const { name, age, height } = this.state.smurf;
    return (
      <form onSubmit = {this.addSmurf} >
        <input 
          input='text'
          name='name'
          placeholder='name'
          value={name}
          onChange={this.handleChange}
        />

        <input 
          input='text'
          name='age'
          placeholder='age'
          value={age}
          onChange={this.handleChange}
        />

        <input 
          input='text'
          name='height'
          placeholder='height'
          value={height}
          onChange={this.handleChange}
        />
        <button>add</button>
      </form>
    )
  }
}
const mapStateToProps = state => {
 (console.log('from form map ', state))
  return{
  name: state.smurfs.name,
  age: state.smurfs.age,
  height: state.smurfs.height,
  id: state.smurfs.id,
  isloading: state.smurfs.isloading,
  error:state.smurfs.error
  }
  
}

export default connect(mapStateToProps, { addSmurf })(Forms);