function ExperienceForm({onArrayInputChange}){
    return(
        <div className="experience-form">
            <h2>Experience</h2>
            <input type='text' placeholder="Position" name='positionExp' id={0} onChange={onArrayInputChange}/>
            <input type='text' placeholder="Company" name='companyExp' id={0} onChange={onArrayInputChange}/>
            <input type='text' placeholder="City, State" name='companyLocExp' id={0} onChange={onArrayInputChange}/>
            <input type='text' placeholder="Start Date" name='fromDateExp' id={0} onChange={onArrayInputChange}/>
            <input type='text' placeholder="End Date" name='toDateExp' id={0} onChange={onArrayInputChange}/>
            <input type='text' placeholder="Description" name='descriptionExp' id={0} onChange={onArrayInputChange}/>
        </div>
    )
}

export default ExperienceForm;