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
		<div className='personal-info'>
			<h1>{position}</h1>
			<div className='right-personal'>
				<h3>
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
