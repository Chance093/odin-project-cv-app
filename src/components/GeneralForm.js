import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import PersonalForm from "./PersonalForm";

function GeneralForm({onInputChange, onArrayInputChange, addForm, state}){
    return(
        <div className="general-form">
            <PersonalForm onInputChange={onInputChange}/>
            <ExperienceForm onArrayInputChange={onArrayInputChange} addForm={addForm} state={state.experience}/>
            <EducationForm onArrayInputChange={onArrayInputChange}/>
        </div>
    )
}

export default GeneralForm;