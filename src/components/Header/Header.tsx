import React from 'react';

import Logo from './components/Logo/Logo';
import Button from 'src/common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { IRootState } from '../../store/rootReducer';

import { logout } from 'src/store/slices/userSlice';
import { useAppDispatch, useAppSelector } from 'src/store/hooks/hooks';
import { removeValue } from 'src/helpers/localStorageHelper';
import { USER_INFO_KEY } from 'src/constants';
import { selectUser } from 'src/store/selectors/selectors';

import './Header.css';

function Header() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const userInfo = useAppSelector(selectUser);

	const logoutUser = () => {
		removeValue(USER_INFO_KEY);
		dispatch(logout({}));
		navigate('/login');
	};
	return (
		<header className='header'>
			<Logo />
			<div className='greet'>
				{userInfo.isAuth && (
					<>
						<span>{userInfo.name}</span>
						<Button text='Logout' onClick={logoutUser} />
					</>
				)}
			</div>
		</header>
	);
}

export default Header;
