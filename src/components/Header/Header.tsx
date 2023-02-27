import React from 'react';
import { useDispatch } from 'react-redux';

import Logo from './components/Logo/Logo';
import Button from 'src/common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { IRootState } from '../../store/rootReducer';

import './Header.css';
import { logout } from 'src/store/slices/userSlice';
import { useAppSelector } from 'src/store/hooks/hooks';
import { removeValue } from 'src/helpers/localStorageHelper';
import { USER_INFO_KEY } from 'src/constants';

function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const userInfo = useAppSelector((state: IRootState) => state.user);

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
