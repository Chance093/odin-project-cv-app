function GeneralInfo({firstName, lastName, position, address, phoneNumber, email, description,
    positionExp, companyExp, companyLocExp, fromDateExp, toDateExp, descriptionExp, 
    schoolEdu, locationEdu, degreeEdu, fieldEdu, fromDateEdu, toDateEdu, descriptionEdu, 
    skills}){

    return(
        <div className="general-info">
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{position}</p>
            <p>{address}</p>
            <p>{phoneNumber}</p>
            <p>{email}</p>
            <p>{description}</p>
            <p>{skills}</p>
            <p>{positionExp}</p>
            <p>{companyExp}</p>
            <p>{companyLocExp}</p>
            <p>{fromDateExp}</p>
            <p>{toDateExp}</p>
            <p>{descriptionExp}</p>
            <p>{schoolEdu}</p>
            <p>{locationEdu}</p>
            <p>{degreeEdu}</p>
            <p>{fieldEdu}</p>
            <p>{fromDateEdu}</p>
            <p>{toDateEdu}</p>
            <p>{descriptionEdu}</p>
        </div>
    )
}


export default GeneralInfo;