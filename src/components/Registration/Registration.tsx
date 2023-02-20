import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios, { isCancel, AxiosError } from 'axios';
import courseApi from '../../webClient';

import '../../common/css/Common.css';

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
		// axios
		// 	.post('http://localhost:4000/register', JSON.stringify(data), {
		// 		headers: { 'Content-Type': 'application/json' },
		// 	})
		// 	.then(function (response) {
		// 		response.status === 201 ? navigate('/login') : '';
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	})
		// 	.finally(function () {
		// 		console.log('Final block 1');
		// 	});
		courseApi
			.post('/register', JSON.stringify(data))
			.then(function (response) {
				response.status === 201 ? navigate('/login') : '';
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
				<h1>Registration</h1>
			</div>
			<div className='flex-items'>
				<form onSubmit={createUser} method='post'>
					<label className='formFieldName'>Name</label>
					<input
						className='field'
						name='name'
						type='text'
						value={data ? data.name : ''}
						onChange={handleUpdate}
					></input>
					<label className='formFieldName'>Email</label>
					<input
						className='field'
						name='email'
						type='text'
						value={data ? data.email : ''}
						onChange={handleUpdate}
					></input>
					<label className='formFieldName'>Password</label>
					<input
						className='field'
						name='password'
						type='password'
						value={data ? data.password : ''}
						onChange={handleUpdate}
					></input>
					<div className='field'>
						<input
							className='flex-submit'
							type='submit'
							value='Register'
						></input>
					</div>

					{/* <div className='flex-button'>
						<Button text='Login' customClassName='custom' />
					</div> */}
					<div className='flex-items'>
						If you not have an account you can <Link to='/login'>Login</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Registration;
