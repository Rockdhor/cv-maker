import React, { Component } from 'react'

export default class ExperienceBlock extends Component {
  render() {
    return (
      <div className='row'>
          <div className='col-5'>
            <h4>{this.props.e.Duration}</h4>
          </div>
          <div className='col-7 right-text'>
            <h2>
                {this.props.e.Company}
            </h2>
            <h3>
                {this.props.e.Position}
            </h3>
            
          </div>
      </div>
    )
  }
}
