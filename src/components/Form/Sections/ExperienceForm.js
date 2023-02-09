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
					<button
						onClick={deleteForm}
						name='experience'
						id={list.id}
						className={Style.deleteBtn}
					>
						Delete
					</button>
				</li>
			))}
		</ul>
	);

	return (
		<div className={Style.experienceForm}>
			<header className={Style.head}>
				<h2>Experience</h2>
				<button onClick={addForm} name='experience' className={Style.addBtn}>
					Add Job
				</button>
			</header>

			{list}
		</div>
	);
}

export default ExperienceForm;
