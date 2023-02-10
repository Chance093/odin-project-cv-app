import PersonalInfo from './Sections/PersonalInfo';
import ObjectiveInfo from './Sections/ObjectiveInfo';
import EducationInfo from './Sections/EducationInfo';
import ExperienceInfo from './Sections/ExperienceInfo';
import SkillsInfo from './Sections/SkillsInfo';
import styles from './Resume.module.css';

function Resume({ state }) {
	return (
		<div className={styles.resume}>
			<PersonalInfo
				firstName={state.firstName}
				lastName={state.lastName}
				position={state.position}
				address1={state.address1}
				address2={state.address2}
				phoneNumber={state.phoneNumber}
				email={state.email}
			/>
			<ObjectiveInfo objective={state.objective} />
			<EducationInfo education={state.education} />
			<ExperienceInfo experience={state.experience} />
			<SkillsInfo skills={state.skills} />
		</div>
	);
}

export default Resume;
