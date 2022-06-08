import React, { Component } from 'react'

export default class Preview extends Component {
  
  render() {
    return (
      <div id="preview" className='col-7'>
          <h1>Preview</h1> 
          <h2>{this.props.name}</h2>
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
    </div>
    )
  }
}
