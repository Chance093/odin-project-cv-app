import React, {Component} from 'react';
import GeneralForm from './components/GeneralForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      position: '',
      address: '',
      phoneNumber: '',
      email: '',
      description: '',
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

  onFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value,
    })
  }

  onLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value,
    })
  }

  onPositionChange = (e) => {
    this.setState({
      position: e.target.value,
    })
  }

  onAddressChange = (e) => {
    this.setState({
      address: e.target.value,
    })
  }

  onPhoneNumberChange = (e) => {
    this.setState({
      phoneNumber: e.target.value,
    })
  }

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    })
  }

  render(){
    return (
      <div className="App">
        <GeneralForm 
          onFirstNameChange={this.onFirstNameChange}
          onLastNameChange={this.onLastNameChange}
          onPositionChange={this.onPositionChange}
          onAddressChange={this.onAddressChange}
          onPhoneNumberChange={this.onPhoneNumberChange}
          onEmailChange={this.onEmailChange}
          onDescriptionChange={this.onDescriptionChange}
        />
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
      </div>
    );
  }
}

export default App;
