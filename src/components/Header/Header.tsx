import React from 'react';
import Logo from './components/Logo/Logo';
import Button from 'src/common/Button/Button';
import './Header.css';

function Header() {
	return (
		<header className='header'>
			<Logo />
			<div className='greet'>
				<span>Viktor</span>
				<Button text='Logout' />
			</div>
		</header>
	);
}

export default Header;
