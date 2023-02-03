function GeneralForm({onFirstNameChange, onLastNameChange, onPositionChange, onAddressChange, onPhoneNumberChange, onEmailChange, onDescriptionChange}){
    return(
        <div className="general-form">
            <input type='text' placeholder="First Name" onChange={onFirstNameChange}></input>
            <input type='text' placeholder="Last Name" onChange={onLastNameChange}></input>
            <input type='text' placeholder="Position" onChange={onPositionChange}></input>
            <input type='text' placeholder="Address" onChange={onAddressChange}></input>
            <input type='text' placeholder="Phone Number" onChange={onPhoneNumberChange}></input>
            <input type='text' placeholder="Email" onChange={onEmailChange}></input>
            <input type='text' placeholder="Description" onChange={onDescriptionChange}></input>
        </div>
    )
}

export default GeneralForm;