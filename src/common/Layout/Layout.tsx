import React from 'react';
import './Layout.css';

interface layoutProps {
	children: React.ReactNode | React.ReactNode[];
}

const Layout: React.FC<layoutProps> = ({ children }) => {
	return <div className='layout'>{children}</div>;
};

export default React.memo(Layout);
