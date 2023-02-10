import styles from '../Resume.module.css';

function ExperienceInfo({ experience }) {
	const list = (
		<ul className={styles.rightExperience}>
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
		<div className={styles.experienceInfo}>
			<h2 className={styles.leftExperience}>Experience</h2>
			{list}
		</div>
	);
}

export default ExperienceInfo;
