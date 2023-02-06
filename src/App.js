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
      schoolEdu: '',
      locationEdu: '',
      degreeEdu: '',
      fieldEdu: '',
      fromDateEdu: '',
      toDateEdu: '',
      descriptionEdu: '',
      skills: '',
    }
  }

  onInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return (
      <div className="App">
        <GeneralForm onInputChange={this.onInputChange}/>
        <Resume state={this.state}/>
      </div>
    );
  }
}

export default App;
