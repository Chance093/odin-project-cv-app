import PersonalInfo from "./PersonalInfo";
import ObjectiveInfo from "./ObjectiveInfo";
import EducationInfo from "./EducationInfo";

function Resume({firstName, lastName, position, address1, address2, phoneNumber, email, objective,
    positionExp, companyExp, companyLocExp, fromDateExp, toDateExp, descriptionExp, 
    schoolEdu, locationEdu, degreeEdu, fieldEdu, fromDateEdu, toDateEdu, descriptionEdu, 
    skills}){

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
            {/*<ExperienceInfo/>
            <SkillsInfo/> */}
        </div>
    )
}


export default Resume;