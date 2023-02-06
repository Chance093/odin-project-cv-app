import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import PersonalForm from "./PersonalForm";

function GeneralForm({onInputChange, onEducationInputChange}){
    return(
        <div className="general-form">
            <PersonalForm onInputChange={onInputChange}/>
            <ExperienceForm onInputChange={onInputChange}/>
            <EducationForm onEducationInputChange={onEducationInputChange}/>
        </div>
    )
}

export default GeneralForm;