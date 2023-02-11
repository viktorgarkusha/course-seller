import React from 'react';
import './Modal.css';

export type TModalProps = {
	children: React.ReactNode | React.ReactNode[];
	oneClose?: () => void;
};

const Modal = ({ children }) => {
	return <div className='modalOverlay'>{children}</div>;
};

export default React.memo(Modal);
