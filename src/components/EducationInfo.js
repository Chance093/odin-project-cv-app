function EducationInfo({ education }) {
	const list = (
		<ul className='right-education'>
			{education.map((list) => (
				<li key={list.id}>
					<p>
						<span>{list.schoolEdu}</span> / {list.degreeEdu} in {list.fieldEdu}
					</p>
					<p>
						{list.fromDateEdu} - {list.toDateEdu}, {list.locationEdu}
					</p>
					<p>{list.descriptionEdu}</p>
				</li>
			))}
		</ul>
	);

	return (
		<div className='education-info'>
			<h2>Education</h2>
			{list}
		</div>
	);
}

export default EducationInfo;
