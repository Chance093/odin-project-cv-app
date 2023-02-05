function Resume({firstName, lastName, position, address, phoneNumber, email, description,
    positionExp, companyExp, companyLocExp, fromDateExp, toDateExp, descriptionExp, 
    schoolEdu, locationEdu, degreeEdu, fieldEdu, fromDateEdu, toDateEdu, descriptionEdu, 
    skills}){

    return(
        <div className="resume">
            <PersonalInfo/>
            <ObjectiveInfo/>
            <EducationInfo/>
            <ExperienceInfo/>
            <SkillsInfo/>
        </div>
    )
}


export default Resume;