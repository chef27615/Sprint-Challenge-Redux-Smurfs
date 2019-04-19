import React, { Component } from 'react'

export default class Smurf extends Component {
    
  
    render() {
      console.log('inside smurf', this.props)

      const {age, height, name}= this.props.smurf;
    return (
      <div>
        <h2>{name}</h2>
        <p>{age}</p>
        <p>{height}</p>
      </div>
    )
  }
}
