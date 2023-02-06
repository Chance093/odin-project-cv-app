import PersonalInfo from "./PersonalInfo";
import ObjectiveInfo from "./ObjectiveInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import SkillsInfo from "./SkillsInfo";

function Resume({firstName, lastName, position, address1, address2, phoneNumber, email, objective,
    positionExp, companyExp, companyLocExp, fromDateExp, toDateExp, descriptionExp, 
    schoolEdu, locationEdu, degreeEdu, fieldEdu, fromDateEdu, toDateEdu, descriptionEdu, 
    skills}){

        // Add all of state as prop and then refer to that prop as prop.specificInfo

    return(
        <div className="resume">
            <PersonalInfo 
            firstName={firstName}
            lastName={lastName}
            position={position}
            address1={address1}
            address2={address2}
            phoneNumber={phoneNumber}
            email={email}
            />
            <ObjectiveInfo objective={objective}/>
            <EducationInfo 
                schoolEdu={schoolEdu}
                locationEdu={locationEdu}
                degreeEdu={degreeEdu}
                fieldEdu={fieldEdu}
                fromDateEdu={fromDateEdu}
                toDateEdu={toDateEdu}
                descriptionEdu={descriptionEdu}
            />
            <ExperienceInfo 
                positionExp={positionExp}
                companyExp={companyExp}
                companyLocExp={companyLocExp}
                fromDateExp={fromDateExp}
                toDateExp={toDateExp}
                descriptionExp={descriptionExp}
            />
            <SkillsInfo skills={skills}/>
        </div>
    )
}


export default Resume;