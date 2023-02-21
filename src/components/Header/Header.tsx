import React from 'react';

import Logo from './components/Logo/Logo';
import Button from 'src/common/Button/Button';
import { getValue, removeValue } from '../../helpers/localStorageHelper';
import { useNavigate } from 'react-router-dom';
import { USER_INFO_KEY } from '../../constants';

import './Header.css';

function Header() {
	const navigate = useNavigate();
	const userInfo = JSON.parse(getValue(USER_INFO_KEY));

	const logout = () => {
		removeValue(USER_INFO_KEY);
		navigate('/login');
	};
	return (
		<header className='header'>
			<Logo />
			<div className='greet'>
				{userInfo ? (
					<>
						<span>{userInfo.name}</span>
						<Button text='Logout' onClick={logout} />
					</>
				) : (
					<>
						<Button text='Login' />
					</>
				)}
			</div>
		</header>
	);
}

export default Header;
