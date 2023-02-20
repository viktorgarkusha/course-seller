import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'src/components/Header/Header';
import './Layout.css';

const Layout = () => {
	return (
		<div className='layout'>
			<Header />
			<Outlet />
			<footer>2023</footer>
		</div>
	);
};

export default React.memo(Layout);
