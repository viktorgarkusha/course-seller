import React from 'react';
import './Button.css';

export type ButtonProps = {
	text: string;
	onClick?: () => void;
	customClassName?: string;
};

function Button({ text, onClick, customClassName }: ButtonProps) {
	return (
		<button
			type='button'
			className={customClassName ? customClassName + ' btn' : ' btn'}
			onClick={onClick}
		>
			{text}
		</button>
	);
}

export default React.memo(Button);
