function ExperienceForm({onInputChange}){
    return(
        <div className="experience-form">
            <h2>Experience</h2>
            <input type='text' placeholder="Position" name='positionExp' onChange={onInputChange}/>
            <input type='text' placeholder="Company" name='companyExp' onChange={onInputChange}/>
            <input type='text' placeholder="City, State" name='companyLocExp' onChange={onInputChange}/>
            <input type='text' placeholder="Start Date" name='fromDateExp' onChange={onInputChange}/>
            <input type='text' placeholder="End Date" name='toDateExp' onChange={onInputChange}/>
            <input type='text' placeholder="Description" name='descriptionExp' onChange={onInputChange}/>
        </div>
    )
}

export default ExperienceForm;