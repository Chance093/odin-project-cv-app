import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import PersonalForm from "./PersonalForm";

function GeneralForm({onInputChange, onArrayInputChange}){
    return(
        <div className="general-form">
            <PersonalForm onInputChange={onInputChange}/>
            <ExperienceForm onArrayInputChange={onArrayInputChange}/>
            <EducationForm onArrayInputChange={onArrayInputChange}/>
        </div>
    )
}

export default GeneralForm;