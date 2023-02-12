import React from 'react';
import Logo from './components/Logo/Logo';
import Button from 'src/common/Button/Button';
// TODO: please create file Header.css in the Header folder and move all styles for this component to the appropriate file

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
