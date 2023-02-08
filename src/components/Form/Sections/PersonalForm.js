import Style from '../Form.module.css';

function PersonalForm({ onInputChange }) {
	return (
		<div className={Style.personalForm}>
			<h2 className={Style.head}>Personal Information</h2>
			<input
				className={Style.input}
				type='text'
				placeholder='First Name'
				name='firstName'
				onChange={onInputChange}
			/>
			<input
				className={Style.input}
				type='text'
				placeholder='Last Name'
				name='lastName'
				onChange={onInputChange}
			/>
			<input
				className={Style.input}
				type='text'
				placeholder='Position'
				name='position'
				onChange={onInputChange}
			/>
			<input
				className={Style.input}
				type='text'
				placeholder='Address'
				name='address1'
				onChange={onInputChange}
			/>
			<input
				className={Style.input}
				type='text'
				placeholder='City, State and Zip Code'
				name='address2'
				onChange={onInputChange}
			/>
			<input
				className={Style.input}
				type='text'
				placeholder='Phone Number'
				name='phoneNumber'
				onChange={onInputChange}
			/>
			<input
				className={Style.input}
				type='text'
				placeholder='Email'
				name='email'
				onChange={onInputChange}
			/>
			<input
				className={Style.input}
				type='text'
				placeholder='Objective Statement'
				name='objective'
				onChange={onInputChange}
			/>
			<input
				className={Style.input}
				type='text'
				placeholder='Skills'
				name='skills'
				onChange={onInputChange}
			/>
		</div>
	);
}

export default PersonalForm;
