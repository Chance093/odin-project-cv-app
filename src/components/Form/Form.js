import EducationForm from './Sections/EducationForm';
import ExperienceForm from './Sections/ExperienceForm';
import PersonalForm from './Sections/PersonalForm';

function Form({
	onInputChange,
	onArrayInputChange,
	addForm,
	deleteForm,
	state,
}) {
	return (
		<div className='general-form'>
			<PersonalForm onInputChange={onInputChange} />
			<ExperienceForm
				onArrayInputChange={onArrayInputChange}
				addForm={addForm}
				deleteForm={deleteForm}
				state={state.experience}
			/>
			<EducationForm
				onArrayInputChange={onArrayInputChange}
				addForm={addForm}
				deleteForm={deleteForm}
				state={state.education}
			/>
		</div>
	);
}

export default Form;
