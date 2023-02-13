import React from 'react';
import './Modal.css';

export type TModalProps = {
	children?: React.ReactNode | React.ReactNode[];
	onClose?: () => void;
};

const Modal = ({ children, onClose }) => {
	return (
		<div onClick={onClose} className='modalOverlay'>
			<div onClick={(evt) => evt.stopPropagation()}>{children}</div>
		</div>
	);
};

export default React.memo(Modal);
