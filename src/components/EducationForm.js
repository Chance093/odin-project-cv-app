function EducationForm({onInputChange}){
    return(
        <div className="education-form">
            <h2>Education</h2>
            <input type='text' placeholder="University Name" name='schoolEdu' onChange={onInputChange}/>
            <input type='text' placeholder="City, State" name='locationEdu' onChange={onInputChange}/>
            <input type='text' placeholder="Degree" name='degreeEdu' onChange={onInputChange}/>
            <input type='text' placeholder="Field of Study" name='fieldEdu' onChange={onInputChange}/>
            <input type='text' placeholder="Start Date" name='fromDateEdu' onChange={onInputChange}/>
            <input type='text' placeholder="End Date" name='toDateEdu' onChange={onInputChange}/>
            <input type='text' placeholder="Description" name='descriptionEdu' onChange={onInputChange}/>
        </div>
    )
}

export default EducationForm;