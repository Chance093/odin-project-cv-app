import PersonalInfo from "./PersonalInfo";

function Resume({firstName, lastName, position, address1, address2, phoneNumber, email, description,
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
            {/* <ObjectiveInfo/>
            <EducationInfo/>
            <ExperienceInfo/>
            <SkillsInfo/> */}
        </div>
    )
}


export default Resume;