import React from 'react';

export type ButtonProps = {
	text: string;
	onClick?: () => void;
};

function Button({ text, onClick }: ButtonProps) {
	return (
		<button type='button' className='btn success' onClick={onClick}>
			{text}
		</button>
	);
}

export default React.memo(Button);
