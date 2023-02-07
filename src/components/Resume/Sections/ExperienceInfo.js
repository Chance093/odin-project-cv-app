function ExperienceInfo({ experience }) {
	// Make it dynamically add more experience cells based on how many jobs person has had

	return (
		<div className='experience-info'>
			<h2>Experience</h2>
			<div className='right-experience'>
				<div className='experience'>
					<p>
						<span>{experience[0].companyExp}</span> /{' '}
						{experience[0].positionExp}
					</p>
					<p>
						{experience[0].fromDateExp} - {experience[0].toDateExp},{' '}
						{experience[0].companyLocExp}
					</p>
					<p>{experience[0].descriptionExp}</p>
				</div>
			</div>
		</div>
	);
}

export default ExperienceInfo;
