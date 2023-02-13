import React from 'react';
import Header from 'src/components/Header/Header';
import './Layout.css';

interface layoutProps {
	children: React.ReactNode | React.ReactNode[];
}

const Layout: React.FC<layoutProps> = ({ children }) => {
	return (
		<div className='layout'>
			<Header />
			{children}
		</div>
	);
};

export default React.memo(Layout);
