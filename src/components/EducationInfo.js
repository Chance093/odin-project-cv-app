function EducationInfo({education }){

    return(
        <div className="education-info">
            <h2>Education</h2>
            <div className="right-education">
                <div className="education">
                    <p><span>{education[0].schoolEdu}</span> / {education[0].degreeEdu} in {education[0].fieldEdu}</p>
                    <p>{education[0].fromDateEdu} - {education[0].toDateEdu}, {education[0].locationEdu}</p>
                    <p>{education[0].descriptionEdu}</p>
                </div>
            </div>
        </div>
    )
}


export default EducationInfo;