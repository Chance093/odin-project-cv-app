import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import PersonalForm from './PersonalForm';

function GeneralForm({
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

export default GeneralForm;
