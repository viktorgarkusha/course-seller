import React from 'react';

import { getAuthorNames } from '../../helpers/getAuthorNames';

import { TCourses } from 'src/types/course';
import { TInputField } from './../../types/inputField';

export type TInputProps = {
	course: TCourses;
	field: TInputField;
	onChangeText: (evet) => void;
};

const Input = ({ course, field, onChangeText }: TInputProps) => {
	return (
		<>
			<label htmlFor={field.name} className='fieldName'>
				{field.label}
			</label>
			{field.type !== 'textarea' && (
				<input
					type={field.type}
					id={field.name}
					name={field.name}
					value={course[field.name] || ''}
					placeholder={field.placeHolder}
					onChange={onChangeText}
				/>
			)}
			{field.type === 'date' && <i className='fas fa-calendar-alt'></i>}
			{field.type === 'textarea' && (
				<textarea
					rows={3}
					name={field.name}
					value={course[field.name] || ''}
					placeholder={field.placeHolder}
					onChange={onChangeText}
				></textarea>
			)}
		</>
	);
};

export default Input;
