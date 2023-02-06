function ExperienceInfo({positionExp, companyExp, companyLocExp, 
    fromDateExp, toDateExp, descriptionExp }){

        // Make it dynamically add more experience cells based on how many jobs person has had

    return(
        <div className="experience-info">
            <h2>Experience</h2>
            <div className="right-experience">
                <div className="experience">
                    <p><span>{companyExp}</span> / {positionExp}</p>
                    <p>{fromDateExp} - {toDateExp}, {companyLocExp}</p>
                    <p>{descriptionExp}</p>
                </div>
            </div>
        </div>
    )
}


export default ExperienceInfo;