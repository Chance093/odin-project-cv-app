function ExperienceForm({onArrayInputChange, addForm, state}){
   
    const list = (
        <ul className="experience">
            {state.map((list, i) => 
                <li>
                    <input type='text' placeholder="Position" name='positionExp' id={i} onChange={onArrayInputChange}/>
                    <input type='text' placeholder="Company" name='companyExp' id={i} onChange={onArrayInputChange}/>
                    <input type='text' placeholder="City, State" name='companyLocExp' id={i} onChange={onArrayInputChange}/>
                    <input type='text' placeholder="Start Date" name='fromDateExp' id={i} onChange={onArrayInputChange}/>
                    <input type='text' placeholder="End Date" name='toDateExp' id={i} onChange={onArrayInputChange}/>
                    <input type='text' placeholder="Description" name='descriptionExp' id={i} onChange={onArrayInputChange}/>
                </li>
            )}
        </ul>
    )

    return(
        <div className="experience-form">
            <h2>Experience</h2>
            {list}
            <button onClick={addForm} name='experience'>Add</button>
        </div>
    )
}

export default ExperienceForm;