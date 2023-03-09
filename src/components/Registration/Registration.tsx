import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import '../../common/css/Common.css';
import { TInputField } from 'src/types/inputField';
import Input from 'src/common/Input/Input';
import { register } from 'src/services';

export type TUserRequest = {
	name: string;
	email: string;
	password: string;
};

const fields: TInputField[] = [
	{
		name: 'name',
		label: 'Name',
		type: 'text',
		placeHolder: '',
	},
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
		register(data).then(() => {
			navigate('/login');
		});
	};

	return (
		<div className='login'>
			<div className='flex-items'>
				<h1>Registration</h1>
			</div>
			<div className='flex-items'>
				<form onSubmit={createUser} method='post'>
					{fields.map((field) => {
						return (
							<Input
								key={field.name}
								value={data[field.name]}
								field={field}
								onChangeText={handleUpdate}
								customLabelClass='formFieldName'
								customInputClass='field'
							/>
						);
					})}
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
