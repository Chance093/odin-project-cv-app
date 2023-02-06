function EducationForm({onEducationInputChange}){
    return(
        <div className="education-form">
            <h2>Education</h2>
            <input type='text' placeholder="University Name" name='schoolEdu' id={0} onChange={onEducationInputChange}/>
            <input type='text' placeholder="City, State" name='locationEdu' id={0} onChange={onEducationInputChange}/>
            <input type='text' placeholder="Degree" name='degreeEdu' id={0} onChange={onEducationInputChange}/>
            <input type='text' placeholder="Field of Study" name='fieldEdu' id={0} onChange={onEducationInputChange}/>
            <input type='text' placeholder="Start Date" name='fromDateEdu' id={0} onChange={onEducationInputChange}/>
            <input type='text' placeholder="End Date" name='toDateEdu' id={0} onChange={onEducationInputChange}/>
            <input type='text' placeholder="Description" name='descriptionEdu' id={0} onChange={onEducationInputChange}/>
        </div>
    )
}

export default EducationForm;