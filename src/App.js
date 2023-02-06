import React, {Component} from 'react';
import GeneralForm from './components/GeneralForm';
import Resume from './components/Resume';

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
        positionExp: '',
        companyExp: '',
        companyLocExp: '',
        fromDateExp: '',
        toDateExp: '',
        descriptionExp: '',
      }],
      education: [{
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
    const obj = this.state[field];
    this.setState({[field]: [
      ...obj.slice(0, id),
      {...obj[id], [name]: e.target.value},
      ...obj.slice(id + 1)
    ]
    })
  }

  render(){
    return (
      <div className="App">
        <GeneralForm onInputChange={this.onInputChange} onArrayInputChange={this.onArrayInputChange}/>
        <Resume state={this.state}/>
      </div>
    );
  }
}

export default App;
