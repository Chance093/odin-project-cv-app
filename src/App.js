import React, {Component} from 'react';

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

  render(){
    return (
      <div className="App">
        <input onChange={this.onFirstNameChange}></input>
        <input onChange={this.onLastNameChange}></input>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
      </div>
    );
  }
}

export default App;
