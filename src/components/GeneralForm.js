import PersonalForm from "./PersonalForm";

function GeneralForm({onInputChange}){
    return(
        <div className="general-form">
            <PersonalForm onInputChange={onInputChange}/>
        </div>
    )
}

export default GeneralForm;