import React, { Component } from 'react'

export default class EducationBlock extends Component {
  render() {
    return (
      <div className='row'>
          <div className='col-5'>
            <h4>{this.props.e.Duration}</h4>
          </div>
          <div className='col-7 right-text'>
            <h2>
                {this.props.e.School}
            </h2>
            <h3>
                {this.props.e.Degree}
            </h3>
          
          </div>
      </div>
    )
  }
}
