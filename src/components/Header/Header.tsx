import React from 'react';

import Logo from './components/Logo/Logo';
import Button from 'src/common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { IRootState } from '../../store/rootReducer';

import { logout } from 'src/store/thunks/userThunk';
import { useAppDispatch, useAppSelector } from 'src/store/hooks/hooks';
import { removeValue } from 'src/helpers/localStorageHelper';
import { USER_TOKEN } from 'src/constants';
import { selectUser } from 'src/store/selectors/selectors';

import './Header.css';

function Header() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const userInfo = useAppSelector(selectUser);

	const logoutUser = () => {
		dispatch(logout());
		removeValue(USER_TOKEN);
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
