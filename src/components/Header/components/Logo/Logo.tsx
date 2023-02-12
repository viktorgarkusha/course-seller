import React from 'react';
import logo from '../Logo/logo.svg'; // TODO: Please create folder Public and move all images to this folder. And make sure that this import paath is correct;

function Logo() {
	return <img className='logo' src={logo} />;
}

export default Logo;
