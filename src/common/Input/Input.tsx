import React from 'react';

import { TInputField } from './../../types/inputField';

import './Input.css';

export type TInputProps = {
	value?: string;
	field: TInputField;
	onChangeText: (evet) => void;
	customLabelClass?: string;
	customInputClass?: string;
};

const Input = ({
	value = '',
	field,
	onChangeText,
	customLabelClass,
	customInputClass,
}: TInputProps) => {
	return (
		<div className='input'>
			<label
				htmlFor={field.name}
				className={customLabelClass ? customLabelClass : 'fieldName'}
			>
				{field.label}
			</label>
			{field.type !== 'textarea' && (
				<input
					type={field.type}
					id={field.name}
					name={field.name}
					value={value || ''}
					placeholder={field.placeHolder}
					onChange={onChangeText}
					className={customInputClass ? customInputClass : ''}
				/>
			)}
			{field.type === 'date' && <i className='fas fa-calendar-alt'></i>}
			{field.type === 'textarea' && (
				<textarea
					rows={3}
					name={field.name}
					value={value}
					placeholder={field.placeHolder}
					onChange={onChangeText}
				></textarea>
			)}
		</div>
	);
};

export default Input;
