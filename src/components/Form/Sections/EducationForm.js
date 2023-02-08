import Style from '../Form.module.css';

function EducationForm({ onArrayInputChange, deleteForm, addForm, state }) {
	const list = (
		<ul className={Style.educationList}>
			{state.map((list) => (
				<li key={list.id} className={Style.education}>
					<input
						className={Style.input}
						type='text'
						placeholder='University Name'
						name='schoolEdu'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={Style.input}
						type='text'
						placeholder='City, State'
						name='locationEdu'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={Style.input}
						type='text'
						placeholder='Degree'
						name='degreeEdu'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={Style.input}
						type='text'
						placeholder='Field of Study'
						name='fieldEdu'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={Style.input}
						type='text'
						placeholder='Start Date'
						name='fromDateEdu'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={Style.input}
						type='text'
						placeholder='End Date'
						name='toDateEdu'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={Style.input}
						type='text'
						placeholder='Description'
						name='descriptionEdu'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<button onClick={deleteForm} name='education' id={list.id}>
						Delete
					</button>
				</li>
			))}
		</ul>
	);

	return (
		<div className={Style.educationForm}>
			<h2 className={Style.head}>Education</h2>
			{list}
			<button onClick={addForm} name='education'>
				Add
			</button>
		</div>
	);
}

export default EducationForm;
