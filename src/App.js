import React, {Component} from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import Preview from "./components/Preview";
import profile from './images/sample.jpg'

class App extends Component {
  constructor() {
    super()

    this.state = {
      name : "John Doe",
      title : "Software Engineer",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed nisl ut nisl consequat interdum. Morbi accumsan placerat nunc a pulvinar. Pellentesque sollicitudin, libero ac elementum vestibulum, metus dui facilisis purus, nec convallis massa lectus ac risus. Nunc ac sem non nisl bibendum ultrices sit amet ac nunc.",
      image : profile,
      address : "21 Jump St., Georgetown, CA 04232",
      phone : "(267) - 324 - 6392",
      website : "johndoe.github.io",
      email : "jhon.doe@email.com",
      skills : ["HTML", "CSS", "JS", "ReactJS", "C#"],
      work : [{
        "Company" : "Amazon",
        "Position" : "Software Engineering Intern",
        "Duration" : "Summer 2022 - Present"
      }],
      education : [{
        "School" : "Amazon",
        "Degree" : "Software Engineering Intern",
        "Duration" : "Summer 2022 - Present"
      }],

    }
    this.updateState = this.updateState.bind(this)
    this.addSkill = this.addSkill.bind(this)
    this.updateSkill = this.updateSkill.bind(this)
    this.deleteSkill = this.deleteSkill.bind(this)
    this.addExperience = this.addExperience.bind(this)
    this.updateExperience = this.updateExperience.bind(this)
    this.deleteExperience = this.deleteExperience.bind(this)
    this.addEducation = this.addEducation.bind(this)
    this.updateEducation = this.updateEducation.bind(this)
    this.deleteEducation = this.deleteEducation.bind(this)
    this.onImageChange = this.onImageChange.bind(this)

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
    _["work"][e.target.dataset.k][e.target.dataset.property] = e.target.value
    this.setState(_)
    console.log(this.state["work"])
  }

  deleteExperience (e) {
    //console.log(e)
    let _ = this.state
    _["work"].splice(e.target.dataset.index, 1)
    this.setState(_)
    //console.log(this.state["work"])
  }

  addEducation (e) {
    let _ = this.state
    _["education"].push({
      "School" : "",
      "Degree" : "",
      "Duration" : "",   
  })
    this.setState(_)
  }

  updateEducation (e) {
    let _ = this.state
    _["education"][e.target.dataset.k][e.target.dataset.property] = e.target.value
    this.setState(_)
    console.log(this.state["education"])
  }

  deleteEducation (e) {
    //console.log(e)
    let _ = this.state
    _["education"].splice(e.target.dataset.index, 1)
    this.setState(_)
    //console.log(this.state["work"])
  }

  onImageChange (event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        let _ = this.state
        _["image"] = e.target.result
        this.setState(_);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }


  render() {
    
    return (
      <div className="App">
        <Header/>
        <div className="row justify-content-around">
          <Editor 
          skills = {this.state.skills} 
          work = {this.state.work}
          education = {this.state.education}
          updateState = {this.updateState} 
          addSkill = {this.addSkill}
          deleteSkill = {this.deleteSkill}
          updateSkill = {this.updateSkill}
          addExperience = {this.addExperience}
          deleteExperience = {this.deleteExperience}
          updateExperience = {this.updateExperience}
          addEducation = {this.addEducation}
          updateEducation = {this.updateEducation}
          deleteEducation = {this.deleteEducation}
          onImageChange = {this.onImageChange}
          />
          <Preview data = {this.state}/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default App;
