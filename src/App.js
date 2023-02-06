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
      positionExp: '',
      companyExp: '',
      companyLocExp: '',
      fromDateExp: '',
      toDateExp: '',
      descriptionExp: '',
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

  onEducationInputChange = (e) => {
    const id = e.target.id;
    const name = e.target.name;
    this.setState({education: [
      ...this.state.education.slice(0, id),
      {...this.state.education[id], [name]: e.target.value},
      ...this.state.education.slice(id + 1)
    ]
    })
  }

  render(){
    return (
      <div className="App">
        <GeneralForm onInputChange={this.onInputChange} onEducationInputChange={this.onEducationInputChange}/>
        <Resume state={this.state}/>
      </div>
    );
  }
}

export default App;
