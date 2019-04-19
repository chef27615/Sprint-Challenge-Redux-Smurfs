import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';




/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state={
    smurf:[] 
  }
componentDidMount(){
  this.props.getSmurfs();
}



  render() {

    console.log(this.props)

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.smurfs.name,
  age: state.smurfs.age,
  height: state.smurfs.height,
  id: state.smurfs.id,
  isloading: state.smurfs.isloading,
  error:state.smurfs.error
})

export default connect(
  mapStateToProps, { getSmurfs, addSmurf }
)(App);
