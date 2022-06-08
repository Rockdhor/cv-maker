import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='container-fluid bg-dark text-light'>
        <div class="row justify-content-around">
          <div className='col-8'>
            <center>
              <h1>CV Maker</h1>
              <br/>
              <h2>By Allen Schmerler</h2> 
            </center>
          </div>
        </div>
      </div>
    )
  }
}