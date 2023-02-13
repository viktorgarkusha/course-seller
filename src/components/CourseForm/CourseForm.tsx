import React, { useState } from 'react';

import { TCourses } from 'src/types/course';

import Button from 'src/common/Button/Button';
import Input from '../../common/Input/Input';

import { createFormFields } from '../../constants';

import './CourseForm.css';

export type TCreateCourse = {
	closeHandler: () => void;
	addNewCourse?: (course: TCourses) => void;
	course?: TCourses;
};

const CourseForm = ({ closeHandler, addNewCourse, course }: TCreateCourse) => {
	const [inputs, setInputs] = useState<TCourses>(
		!course
			? {
					id: '',
					title: '',
					description: '',
					duration: 1,
					creationDate: '',
			  }
			: course
	);
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};
	return (
		<form className='formContainer'>
			<div className='banner'>
				<h1>Add New Course Form</h1>
			</div>
			{createFormFields.map((field) => {
				return (
					<div key={field.name} className='item'>
						<Input course={inputs} field={field} onChangeText={handleChange} />
					</div>
				);
			})}
			<div className='btn-block'>
				<Button
					text={course ? 'Update Course' : 'Add Course'}
					onClick={() => addNewCourse(inputs)}
				/>
				<Button text='Cancel' onClick={closeHandler} />
			</div>
		</form>
	);
};

export default CourseForm;
