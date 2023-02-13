import React from 'react';
import './Button.css';

export type ButtonProps = {
	text: string;
	onClick?: () => void;
};

function Button({ text, onClick }: ButtonProps) {
	return (
		<button type='button' className='btn' onClick={onClick}>
			{text}
		</button>
	);
}

export default React.memo(Button);
