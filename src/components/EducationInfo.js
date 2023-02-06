function EducationInfo({schoolEdu, locationEdu, degreeEdu, 
    fieldEdu, fromDateEdu, toDateEdu, descriptionEdu }){

    return(
        <div className="education-info">
            <h2>Education</h2>
            <div className="right-education">
                <div className="education">
                    <p><span>{schoolEdu}</span> / {degreeEdu} in {fieldEdu}</p>
                    <p>{fromDateEdu} - {toDateEdu}, {locationEdu}</p>
                    <p>{descriptionEdu}</p>
                </div>
            </div>
        </div>
    )
}


export default EducationInfo;