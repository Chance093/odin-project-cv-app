import styles from '../Resume.module.css';

function ObjectiveInfo({ objective }) {
	return (
		<div className={styles.objectiveInfo}>
			<h2 className={styles.leftObjective}>Objective Statement</h2>
			<p className={styles.rightObjective}>{objective}</p>
		</div>
	);
}

export default ObjectiveInfo;
