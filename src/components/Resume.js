import PersonalInfo from "./PersonalInfo";
import ObjectiveInfo from "./ObjectiveInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import SkillsInfo from "./SkillsInfo";

function Resume({state}){
    return(
        <div className="resume">
            <PersonalInfo 
            firstName={state.firstName}
            lastName={state.lastName}
            position={state.position}
            address1={state.address1}
            address2={state.address2}
            phoneNumber={state.phoneNumber}
            email={state.email}
            />
            <ObjectiveInfo objective={state.objective}/>
            <EducationInfo 
                schoolEdu={state.schoolEdu}
                locationEdu={state.locationEdu}
                degreeEdu={state.degreeEdu}
                fieldEdu={state.fieldEdu}
                fromDateEdu={state.fromDateEdu}
                toDateEdu={state.toDateEdu}
                descriptionEdu={state.descriptionEdu}
            />
            <ExperienceInfo 
                positionExp={state.positionExp}
                companyExp={state.companyExp}
                companyLocExp={state.companyLocExp}
                fromDateExp={state.fromDateExp}
                toDateExp={state.toDateExp}
                descriptionExp={state.descriptionExp}
            />
            <SkillsInfo skills={state.skills}/>
        </div>
    )
}


export default Resume;