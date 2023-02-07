function ExperienceInfo({ experience }) {
	const list = (
		<ul className='right-experience'>
			{experience.map((list) => (
				<li key={list.id} className='experience'>
					<p>
						<span>{list.companyExp}</span> / {list.positionExp}
					</p>
					<p>
						{list.fromDateExp} - {list.toDateExp}, {list.companyLocExp}
					</p>
					<p>{list.descriptionExp}</p>
				</li>
			))}
		</ul>
	);

	return (
		<div className='experience-info'>
			<h2>Experience</h2>
			{list}
		</div>
	);
}

export default ExperienceInfo;
