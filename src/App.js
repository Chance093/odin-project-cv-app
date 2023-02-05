import React, {Component} from 'react';
import GeneralForm from './components/GeneralForm';
import GeneralInfo from './components/GeneralInfo';

class App extends Component {
  constructor(props){
    super(props);

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

  onInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){

    const {firstName, lastName, position, address, phoneNumber, email, description, 
      positionExp, companyExp, companyLocExp, fromDateExp, toDateExp, descriptionExp, 
      schoolEdu, locationEdu, degreeEdu, fieldEdu, fromDateEdu, toDateEdu, descriptionEdu, 
      skills} = this.state;

    return (
      <div className="App">
        <GeneralForm onInputChange={this.onInputChange}/>
        <GeneralInfo
          firstName={firstName}
          lastName={lastName}
          position={position}
          address={address}
          phoneNumber={phoneNumber}
          email={email}
          description={description}
          positionExp={positionExp}
          companyExp={companyExp}
          companyLocExp={companyLocExp}
          fromDateExp={fromDateExp}
          toDateExp={toDateExp}
          descriptionExp={descriptionExp}
          schoolEdu={schoolEdu}
          locationEdu={locationEdu}
          degreeEdu={degreeEdu}
          fieldEdu={fieldEdu}
          fromDateEdu={fromDateEdu}
          toDateEdu={toDateEdu}
          descriptionEdu={descriptionEdu}
          skills={skills}
        />
      </div>
    );
  }
}

export default App;
