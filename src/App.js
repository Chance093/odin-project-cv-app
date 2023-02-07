import React, { Component } from 'react';
import GeneralForm from './components/Form/Form';
import Resume from './components/Resume/Resume';
import uuid from 'react-uuid';

class App extends Component {
	constructor(props) {
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
			experience: [
				{
					id: uuid(),
					positionExp: '',
					companyExp: '',
					companyLocExp: '',
					fromDateExp: '',
					toDateExp: '',
					descriptionExp: '',
				},
			],
			education: [
				{
					id: uuid(),
					schoolEdu: '',
					locationEdu: '',
					degreeEdu: '',
					fieldEdu: '',
					startDateEdu: '',
					endDateEdu: '',
					descriptionEdu: '',
				},
			],
			skills: '',
		};
	}

	onInputChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onArrayInputChange = (e) => {
		const id = e.target.id;
		const name = e.target.name;
		const field = name.includes('Edu') ? 'education' : 'experience';
		const arr = this.state[field].map((obj) => {
			if (id === obj.id) {
				return { ...obj, [name]: e.target.value };
			} else return { ...obj };
		});
		this.setState({ [field]: arr });
	};

	addForm = (e) => {
		const field = e.target.name.includes('edu') ? 'education' : 'experience';
		this.setState({
			[field]: [
				...this.state[field],
				field === 'education'
					? {
							id: uuid(),
							schoolEdu: '',
							locationEdu: '',
							degreeEdu: '',
							fieldEdu: '',
							startDateEdu: '',
							endDateEdu: '',
							descriptionEdu: '',
					  }
					: {
							id: uuid(),
							positionExp: '',
							companyExp: '',
							companyLocExp: '',
							fromDateExp: '',
							toDateExp: '',
							descriptionExp: '',
					  },
			],
		});
	};

	deleteForm = (e) => {
		const id = e.target.id;
		const field = e.target.name.includes('edu') ? 'education' : 'experience';
		const arr = this.state[field].filter((obj) => {
			return id !== obj.id;
		});
		this.setState({ [field]: arr });
	};

	render() {
		return (
			<div className='App'>
				<GeneralForm
					onInputChange={this.onInputChange}
					onArrayInputChange={this.onArrayInputChange}
					addForm={this.addForm}
					deleteForm={this.deleteForm}
					state={this.state}
				/>
				<Resume state={this.state} />
			</div>
		);
	}
}

export default App;
