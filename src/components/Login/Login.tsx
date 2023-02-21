import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { TUserRequest } from '../Registration/Registration';
import courseApi from '../../webClient';

import '../../common/css/Common.css';
import Input from 'src/common/Input/Input';
import { TInputField } from 'src/types/inputField';

const Login = () => {
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

	const loginUser = (event) => {
		event.preventDefault();
		courseApi
			.post('/login', JSON.stringify(data))
			.then(function (response) {
				navigate('/courses');
			})
			.catch(function (error) {
				// TODO add hanfler
			});
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
				<h1>Login</h1>
			</div>
			<div className='flex-items'>
				<form onSubmit={loginUser}>
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
						<input className='flex-submit' type='submit' value='Login'></input>
					</div>
					<div className='flex-items'>
						If you not have an account you can &nbsp;
						<NavLink className='customLink' to='/registration'>
							Registration
						</NavLink>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
