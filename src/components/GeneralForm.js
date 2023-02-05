import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import PersonalForm from "./PersonalForm";

function GeneralForm({onInputChange}){
    return(
        <div className="general-form">
            <PersonalForm onInputChange={onInputChange}/>
            <ExperienceForm onInputChange={onInputChange}/>
            <EducationForm onInputChange={onInputChange}/>
        </div>
    )
}

export default GeneralForm;