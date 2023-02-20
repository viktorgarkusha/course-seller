import React, { useEffect, useState } from 'react';

import '../../common/css/Common.css';
import { Link, useNavigate } from 'react-router-dom';

import { TUserRequest } from '../Registration/Registration';
import axios from 'axios';

import courseApi from '../../webClient';

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
		// axios
		// 	.post('http://localhost:4000/login', JSON.stringify(data), {
		// 		headers: { 'Content-Type': 'application/json' },
		// 	})
		// 	.then(function (response) {
		// 		if (response.data.result) {
		// 			localStorage.setItem('accessToken', response.data.result);
		// 			localStorage.setItem('userInfo', JSON.stringify(response.data.user));
		// 		}
		// 		navigate('/courses');
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	})
		// 	.finally(function () {
		// 		console.log('Final block 1');
		// 	});
		courseApi
			.post('/login', JSON.stringify(data))
			.then(function (response) {
				navigate('/courses');
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {
				console.log('Final block 1');
			});
	};

	return (
		<div className='login'>
			<div className='flex-items'>
				<h1>Login</h1>
			</div>
			<div className='flex-items'>
				<form onSubmit={loginUser}>
					<label className='formFieldName'>Email</label>
					<input
						className='field'
						name='email'
						type='email'
						value={data.email}
						onChange={handleUpdate}
					></input>
					<label className='formFieldName'>Password</label>
					<input
						className='field'
						type='password'
						name='password'
						value={data.password}
						onChange={handleUpdate}
					></input>
					<div className='field'>
						<input className='flex-submit' type='submit' value='Login'></input>
					</div>

					{/* <div className='flex-button'>
						<Button text='Login' customClassName='custom' />
					</div> */}
					<div className='flex-items'>
						If you not have an account you can
						<Link to='/registration'>Registration</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
