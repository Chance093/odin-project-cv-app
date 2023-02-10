import styles from './PersonalInfo.module.css';

function PersonalInfo({
	firstName,
	lastName,
	position,
	address1,
	address2,
	phoneNumber,
	email,
}) {
	return (
		<div className={styles.info}>
			<h1 className={styles.left}>{position}</h1>
			<div className={styles.right}>
				<h3 className={styles.name}>
					{firstName} {lastName}
				</h3>
				<p>{address1}</p>
				<p>{address2}</p>
				<p>{phoneNumber}</p>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default PersonalInfo;
