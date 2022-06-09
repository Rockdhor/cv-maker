import React, { Component } from 'react'

export default class SkillInput extends Component {
  render() {
    return (
      <div className='row'>
            <div className='form-group col-8'>
            <label>
            {"Skill " + (this.props.k+1)}
            </label>
                <input onChange={this.props.updateSkill} data-key = {this.props.k} placeholder={"Skill " + (this.props.k + 1)} defaultValue={this.props.skill} className='form-control'/>
            </div>
            <div className='form-group col-4 align-self-end'>
                <button onClick={this.props.deleteSkill}className='btn btn-dark ' data-skill={this.props.skill}>Delete</button>
          </div>
          

        
      </div>
    )
  }
}
