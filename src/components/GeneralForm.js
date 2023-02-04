function GeneralForm({onInputChange}){
    return(
        <div className="general-form">
            <input type='text' placeholder="First Name" name='firstName' onChange={onInputChange}></input>
            <input type='text' placeholder="Last Name" name='lastName' onChange={onInputChange}></input>
            <input type='text' placeholder="Position" name='position' onChange={onInputChange}></input>
            <input type='text' placeholder="Address" name='address' onChange={onInputChange}></input>
            <input type='text' placeholder="Phone Number" name='phoneNumber' onChange={onInputChange}></input>
            <input type='text' placeholder="Email" name='email' onChange={onInputChange}></input>
            <input type='text' placeholder="Description" name='description' onChange={onInputChange}></input>
        </div>
    )
}

export default GeneralForm;