import styles from '../Resume.module.css';

function EducationInfo({ education }) {
	const list = (
		<ul className={styles.rightEducation}>
			{education.map((list) => (
				<li key={list.id} className='education'>
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
		<div className={styles.educationInfo}>
			<h2 className={styles.leftEducation}>Education</h2>
			{list}
		</div>
	);
}

export default EducationInfo;
