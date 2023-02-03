function GeneralInfo({firstName, lastName, position, address, phoneNumber, email, description}){
    return(
        <div className="general-info">
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{position}</p>
            <p>{address}</p>
            <p>{phoneNumber}</p>
            <p>{email}</p>
            <p>{description}</p>
        </div>
    )
}

export default GeneralInfo;