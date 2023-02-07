import React, {Component} from 'react';
import GeneralForm from './components/GeneralForm';
import Resume from './components/Resume';
import uuid from 'react-uuid';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      position: '',
      address1: '',
      address2: '',
      phoneNumber: '',
      email: '',
      objective: '',
      experience: [{
        id: uuid(),
        positionExp: '',
        companyExp: '',
        companyLocExp: '',
        fromDateExp: '',
        toDateExp: '',
        descriptionExp: '',
      }],
      education: [{
        id: uuid(),
        school: '',
        location: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        description: '',
      }],
      skills: '',
    }
  }

  onInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onArrayInputChange = (e) => {
    const id = e.target.id;
    const name = e.target.name;
    const field = name.includes('Edu') ? 'education' : 'experience';
    const arr = this.state[field].map(obj => {
      if(id === obj.id) {
        return {...obj, [name]: e.target.value};
      } else return {...obj};
    })
    this.setState({[field]: arr})
  }

  addForm = (e) => {
    const field = e.target.name.includes('Edu') ? 'education' : 'experience';
    this.setState({[field]: [
      ...this.state[field],
      field === 'education' ? 
      {id: uuid(),
      school: '',
      location: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      description: '',} : 
      {id: uuid(),
      positionExp: '',
      companyExp: '',
      companyLocExp: '',
      fromDateExp: '',
      toDateExp: '',
      descriptionExp: '',}
    ]})
    console.log(this.state);
  }

  render(){
    return (
      <div className="App">
        <GeneralForm onInputChange={this.onInputChange} onArrayInputChange={this.onArrayInputChange} addForm={this.addForm} state={this.state}/>
        <Resume state={this.state}/>
      </div>
    );
  }
}

export default App;
