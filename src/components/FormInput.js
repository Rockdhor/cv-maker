import React, { Component } from 'react'

export default class FormInput extends Component {
  render() {
    return (
      <div className={"form-group col-" + this.props.width}>
          <label htmlFor={"input" + this.props.label}>
          {this.props.label}
          </label>
          <input 
          type="text" className='form-control'
          id={"input" + this.props.label}
          onChange={this.props.updateState} 
          data-property={this.props.property} 
          placeholder={this.props.label}
          />
      </div>
    )
  }
}
