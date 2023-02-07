function EducationForm({onArrayInputChange, addForm, state}){

    const list = (
        <ul className="education">
            {state.map(list => 
                <li key={list.id}>
                    <input type='text' placeholder="University Name" name='schoolEdu' id={list.id} onChange={onArrayInputChange}/>
                    <input type='text' placeholder="City, State" name='locationEdu' id={list.id} onChange={onArrayInputChange}/>
                    <input type='text' placeholder="Degree" name='degreeEdu' id={list.id} onChange={onArrayInputChange}/>
                    <input type='text' placeholder="Field of Study" name='fieldEdu' id={list.id} onChange={onArrayInputChange}/>
                    <input type='text' placeholder="Start Date" name='fromDateEdu' id={list.id} onChange={onArrayInputChange}/>
                    <input type='text' placeholder="End Date" name='toDateEdu' id={list.id} onChange={onArrayInputChange}/>
                    <input type='text' placeholder="Description" name='descriptionEdu' id={list.id} onChange={onArrayInputChange}/>
                </li>
            )}
        </ul>
    )

    return(
        <div className="education-form">
            <h2>Education</h2>
            {list}
            <button onClick={addForm} name='education'>Add</button>
        </div>
    )
}

export default EducationForm;