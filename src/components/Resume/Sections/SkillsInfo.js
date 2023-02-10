import styles from '../Resume.module.css';

function SkillsInfo({ skills }) {
	return (
		<div className={styles.skillsInfo}>
			<h1 className={styles.leftSkills}>Skills</h1>
			<p className={styles.rightSkills}>{skills}</p>
		</div>
	);
}

export default SkillsInfo;
