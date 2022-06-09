import React, { Component } from 'react'

export default class EducationInput extends Component {
  render() {
    return (
      <div>
          <div className='row'>
              <div className='form-group col-12'>
                <label>{"School " + (this.props.k + 1)}</label>
                <input type="text" 
                className='form-control'
                placeholder={"School " + (this.props.k + 1)}
                data-property='School'
                onChange={this.props.updateEducation}
                defaultValue={this.props.work.School}
                data-k = {this.props.k}/>
              </div>
          </div>
          <div className='row'>
              <div className='form-group col-12'>
              <label>{"Degree " + (this.props.k + 1)}</label>
                <input type="text" className='form-control'
                placeholder={"Degree " + (this.props.k + 1)}
                data-property='Degree'
                onChange={this.props.updateEducation}
                defaultValue={this.props.work.Degree}
                data-k = {this.props.k}/>
              </div>
          </div>
          <div className='row'>
              <div className='form-group col-8'>
              <label>{"Duration " + (this.props.k + 1)}</label>
                <input type="text" className='form-control'
                placeholder={"Duration " + (this.props.k + 1)}
                data-property='Duration'
                onChange={this.props.updateEducation}
                defaultValue={this.props.work.Duration}
                data-k = {this.props.k}/>
              </div>
              <div className='form-group col-4 align-self-end'>
              <button data-index={this.props.k} className='btn btn-dark'
              onClick={this.props.deleteEducation}>Delete</button>
              </div>
          </div>
          
      </div>
    )
  }
}
