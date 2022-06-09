import React, { Component } from 'react'
import ExperienceBlock from './ExperienceBlock'
import EducationBlock from './EducationBlock'
export default class Preview extends Component {
  
  render() {
    return (
      <div id="preview" className='col-5 bg-dark text-light'>
          <div className='row'>
            <div className='col-4 align-self-center'>
              <center>
              <img 
              src = {this.props.data.image} alt='Profile picture'/>
              </center>
            </div>
            <div className='col-8 right-text'>
              <h1>{this.props.data.name}</h1>
              <h2>{this.props.data.title}</h2>
              <p>{this.props.data.description}</p>
            </div>
          </div>
          <div className='row bg-light text-dark'>
          <div className='col-6'>
              <p>{this.props.data.address}</p>
              <p>{this.props.data.phone}</p>
            </div>
            <div className='col-6'>
              <p>{this.props.data.website}</p>
              <p>{this.props.data.email}</p>
            </div>
          </div>
          <div className='row justify-content-around'>
            <div className='col-3 text-dark' id="skills">
              <center>
                <h1>Skills</h1>
                {this.props.data.skills.map((i)=> {
                  return <h3>{i}</h3>
                })}
              </center>
            </div>
            <div className='col-8'>
            <center><h1>Work Experience</h1></center>
          {this.props.data.work.map((i)=> {
            return <ExperienceBlock e = {i}/>
          })}
          <center><h1>Education</h1></center>
          {this.props.data.education.map((i)=> {
            return <EducationBlock e = {i}/>
          })}
            </div>
          </div>
    </div>
    )
  }
}
