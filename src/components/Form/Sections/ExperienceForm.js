import Style from '../Form.module.css';

function ExperienceForm({ onArrayInputChange, deleteForm, addForm, state }) {
	const list = (
		<ul className={Style.experienceList}>
			{state.map((list) => (
				<li key={list.id} className={Style.experience}>
					<input
						className={Style.input}
						type='text'
						placeholder='Position'
						name='positionExp'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={Style.input}
						type='text'
						placeholder='Company'
						name='companyExp'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={Style.input}
						type='text'
						placeholder='City, State'
						name='companyLocExp'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={Style.input}
						type='text'
						placeholder='Start Date'
						name='fromDateExp'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={Style.input}
						type='text'
						placeholder='End Date'
						name='toDateExp'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<input
						className={Style.input}
						type='text'
						placeholder='Description'
						name='descriptionExp'
						id={list.id}
						onChange={onArrayInputChange}
					/>
					<button onClick={deleteForm} name='experience' id={list.id}>
						Delete
					</button>
				</li>
			))}
		</ul>
	);

	return (
		<div className={Style.experienceForm}>
			<h2 className={Style.head}>Experience</h2>
			{list}
			<button onClick={addForm} name='experience'>
				Add
			</button>
		</div>
	);
}

export default ExperienceForm;
