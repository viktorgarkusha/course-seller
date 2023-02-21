import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import courseApi from '../../webClient';

import '../../common/css/Common.css';
import { TInputField } from 'src/types/inputField';
import Input from 'src/common/Input/Input';

export type TUserRequest = {
	name: string;
	email: string;
	password: string;
};

const Registration = () => {
	const navigate = useNavigate();
	const [data, setData] = useState<TUserRequest>({
		name: '',
		email: '',
		password: '',
	});

	const handleUpdate = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setData((values) => ({ ...values, [name]: value }));
	};

	const createUser = (event) => {
		event.preventDefault();
		courseApi
			.post('/register', JSON.stringify(data))
			.then(function (response) {
				navigate('/login');
			})
			.catch(function (error) {
				// TODO add hanfler
			});
	};

	const nameFieldSetup: TInputField = {
		name: 'name',
		label: 'Name',
		type: 'text',
		placeHolder: '',
	};
	const emailFieldSetup: TInputField = {
		name: 'email',
		label: 'Email',
		type: 'email',
		placeHolder: '',
	};
	const passwordFieldSetup: TInputField = {
		name: 'password',
		label: 'Password',
		type: 'password',
		placeHolder: '',
	};

	return (
		<div className='login'>
			<div className='flex-items'>
				<h1>Registration</h1>
			</div>
			<div className='flex-items'>
				<form onSubmit={createUser} method='post'>
					<Input
						value={data.name}
						field={nameFieldSetup}
						onChangeText={handleUpdate}
						customLabelClass='formFieldName'
						customInputClass='field'
					/>
					<Input
						value={data.email}
						field={emailFieldSetup}
						onChangeText={handleUpdate}
						customLabelClass='formFieldName'
						customInputClass='field'
					/>
					<Input
						value={data.password}
						field={passwordFieldSetup}
						onChangeText={handleUpdate}
						customLabelClass='formFieldName'
						customInputClass='field'
					/>
					<div className='field'>
						<input
							className='flex-submit'
							type='submit'
							value='Register'
						></input>
					</div>
					<div className='flex-items'>
						If you not have an account you can &nbsp;
						<NavLink className='customLink' to='/login'>
							Login
						</NavLink>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Registration;
