import React, { Component } from 'react'
import FormInput from './FormInput'

export default class Editor extends Component {
    
  render() {
    return (
      <div id="editor" className='col-3'>
          <h1>Editor</h1>
          <div class="row">
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
          <div class="row">
            <FormInput
            updateState={this.props.updateState}
            property='description'
            label='Description'
            />
          </div>
          <div class="row">
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
          <div class="row">
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
          
      </div>
      
    )
  }
}
