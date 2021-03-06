import React, { Component } from 'react'

export default class ExperienceInput extends Component {
  render() {
    return (
      <div>
          <div className='row'>
              <div className='form-group col-12'>
                <label>{"Company " + (this.props.k + 1)}</label>
                <input type="text" 
                className='form-control'
                placeholder={"Company " + (this.props.k + 1)}
                data-property='Company'
                onChange={this.props.updateExperience}
                defaultValue={this.props.work.Company}
                data-k = {this.props.k}/>
              </div>
          </div>
          <div className='row'>
              <div className='form-group col-12'>
              <label>{"Position " + (this.props.k + 1)}</label>
                <input type="text" className='form-control'
                placeholder={"Position " + (this.props.k + 1)}
                data-property='Position'
                onChange={this.props.updateExperience}
                defaultValue={this.props.work.Position}
                data-k = {this.props.k}/>
              </div>
          </div>
          <div className='row'>
              <div className='form-group col-8'>
              <label>{"Duration " + (this.props.k + 1)}</label>
                <input type="text" className='form-control'
                placeholder={"Duration " + (this.props.k + 1)}
                data-property='Duration'
                onChange={this.props.updateExperience}
                defaultValue={this.props.work.Duration}
                data-k = {this.props.k}/>
              </div>
              <div className='form-group col-4 align-self-end'>
              <button data-index={this.props.k} className='btn btn-dark'
              onClick={this.props.deleteExperience}>Delete</button>
              </div>
          </div>
          
      </div>
    )
  }
}
