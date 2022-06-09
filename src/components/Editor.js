import React, { Component } from 'react'
import FormInput from './FormInput'
import ExperienceInput from './ExperienceInput'
import SkillInput from './SkillInput'


export default class Editor extends Component {
    
  render() {
    return (
      <div id="editor" className='col-3 bg-dark text-light'>
          <center><h1>Basic Information</h1></center>
          <div className="row">
          <FormInput
          updateState={this.props.updateState}
          property='name'
          label='Full Name'
          width="6"
          />
          <FormInput
          updateState={this.props.updateState}
          property='title'
          label='Title'
          width="6"
          />
          
          </div>
          <div className="row">
            <FormInput
            updateState={this.props.updateState}
            property='description'
            label='Description'
            />
          </div>
          <div className="row">
            <FormInput
              updateState={this.props.updateState}
              property='address'
              label='Address'
              width='8'
            />
            <FormInput
              updateState={this.props.updateState}
              property='phone'
              label='Phone'
              width='4'
            />
          </div>
          <div className="row">
            <FormInput
              updateState={this.props.updateState}
              property='website'
              label='Website'
              width='6'
            />
            <FormInput
              updateState={this.props.updateState}
              property='email'
              label='E-mail'
              width='6'
            />
          </div>
          <hr/>
          <center>
            <h1>Skills</h1>
            </center>
              <ul>
                {this.props.skills.map((s, i) => {
                  return <SkillInput key={i} k={i} skill={s} updateSkill={this.props.updateSkill}deleteSkill = {this.props.deleteSkill}/>
                })}
              </ul>
          
          <div className='row'>
                <div className='col-12'>
                  <center>
                  <button type="button" className="btn btn-dark" 
                  onClick={this.props.addSkill}>Add a new skill</button> 
                    
                  </center>                </div>
          </div>
          <hr/>
          <h1>Experience</h1>
          <ul>
          {this.props.work.map((e, i) => {
                  return <ExperienceInput k={i} key={i} work={e}
                  deleteExperience = {this.props.deleteExperience}/>
                })}
          </ul>
          
          
          <div className='row'>
            <div className='col-12'>
              <center>
                <button type="button" className="btn btn-dark" 
                  onClick={this.props.addExperience}>Add a new work experience</button> 
                    
              </center>                
            </div>
          </div>
          <hr/>
          <h1>Education</h1>
          
      </div>
      
    )
  }
}
