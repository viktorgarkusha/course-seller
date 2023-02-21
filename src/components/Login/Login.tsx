import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { TUserRequest } from '../Registration/Registration';
import courseApi from '../../webClient';

import '../../common/css/Common.css';
import Input from 'src/common/Input/Input';
import { TInputField } from 'src/types/inputField';

const fields: TInputField[] = [
	{
		name: 'email',
		label: 'Email',
		type: 'email',
		placeHolder: '',
	},
	{
		name: 'password',
		label: 'Password',
		type: 'password',
		placeHolder: '',
	},
];

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
			.then(function () {
				navigate('/courses');
			})
			.catch(function (error) {
				// TODO add hanfler
			});
	};

	return (
		<div className='login'>
			<div className='flex-items'>
				<h1>Login</h1>
			</div>
			<div className='flex-items'>
				<form onSubmit={loginUser}>
					{fields.map((field) => {
						return (
							<Input
								value={data[field.name]}
								field={field}
								onChangeText={handleUpdate}
								customLabelClass='formFieldName'
								customInputClass='field'
							/>
						);
					})}
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
