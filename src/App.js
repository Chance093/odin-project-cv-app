import React, {Component} from 'react';
import GeneralForm from './components/GeneralForm';
import GeneralInfo from './components/GeneralInfo';

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

  // Big function to handle all input changes using linked IDs between state and input tags

  // onInputChange = (e) => {
  //   this.setState({
  //   })
  // }

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

    const {firstName, lastName, position, address, phoneNumber, email, description} = this.state;

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
        <GeneralInfo
          firstName={firstName}
          lastName={lastName}
          position={position}
          address={address}
          phoneNumber={phoneNumber}
          email={email}
          description={description}
        />
      </div>
    );
  }
}

export default App;
