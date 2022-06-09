import React, {Component} from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import Preview from "./components/Preview";

class App extends Component {
  constructor() {
    super()

    this.state = {
      name : "Allen Schmerler",
      title : "Software Engineer",
      description : "An average Joe.",

      skills : ["Sweeping", "Mopping"],
      work : [{
        "Company" : "Amazon",
        "Position" : "Software Engineering Intern",
        "Duration" : "Summer 2022 - Present"
      }],
      education : [],

    }
    this.updateState = this.updateState.bind(this)
    this.addSkill = this.addSkill.bind(this)
    this.updateSkill = this.updateSkill.bind(this)
    this.deleteSkill = this.deleteSkill.bind(this)
    this.addExperience = this.addExperience.bind(this)
    this.updateExperience = this.updateExperience.bind(this)
    this.deleteExperience = this.deleteExperience.bind(this)

  }

  updateState(e) {
    //console.log(e.target.dataset.property)
    let _ = this.state
    _[e.target.dataset.property] = e.target.value === "" ? e.target.placeholder : e.target.value
    this.setState(_)
  }

  addSkill(e) {
    let _ = this.state
    if (_["skills"][_["skills"].length -1] === "") return
    _["skills"].push("")
    this.setState(_)
  }

  updateSkill(e) {
    let _ = this.state
    _["skills"][e.target.dataset.key] = e.target.value
    this.setState(_)
    console.log(this.state["skills"])
  }

  deleteSkill (e) {
    let _ = this.state
    _["skills"] = _["skills"].filter((i) => i !== e.target.dataset.skill)
    this.setState(_)
    console.log(this.state["skills"])
  }
  
  addExperience (e) {
    let _ = this.state
    _["work"].push({
      "Company" : "",
      "Position" : "",
      "Duration" : "",   
  })
    this.setState(_)
  }

  updateExperience (e) {
    let _ = this.state
    _["work"][e.target.dataset.key][e.target.dataset.property] = e.target.value
    this.setState(_)
    console.log(this.state["skills"])
  }

  deleteExperience (e) {
    //console.log(e)
    let _ = this.state
    _["work"].splice(e.target.dataset.index, 1)
    this.setState(_)
    //console.log(this.state["work"])
  }

  render() {
    const {name, title} = this.state
    return (
      <div className="App">
        <Header/>
        <div className="row justify-content-around">
          <Editor 
          skills = {this.state.skills} 
          work = {this.state.work}
          updateState = {this.updateState} 
          addSkill = {this.addSkill}
          deleteSkill = {this.deleteSkill}
          updateSkill = {this.updateSkill}
          addExperience = {this.addExperience}
          deleteExperience = {this.deleteExperience}
          updateExperience = {this.updateExperience}/>
          <Preview name = {name} title = {title}/>
        </div>
        
      </div>
    );
  }
}

export default App;
