import React, { useState } from 'react';

import { TAuthor, TCourses } from 'src/types/course';

import Button from 'src/common/Button/Button';
import Input from '../../common/Input/Input';
import AuthorForm from './components/AuthorsForm';

import { createFormFields } from '../../constants';

import './CourseForm.css';

export type TCourseForm = {
	closeHandler: () => void;
	handleCourse: (course: TCourses) => void;
	course?: TCourses;
};

const CourseForm = ({ closeHandler, handleCourse, course }: TCourseForm) => {
	const [inputs, setInputs] = useState<TCourses>(
		!course
			? {
					id: '',
					title: '',
					description: '',
					duration: 1,
					authors: [],
					creationDate: new Date().toDateString(),
			  }
			: course
	);
	const handleChangeText = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSaveAuthor = (author: TAuthor) => {
		setInputs((values) => ({
			...values,
			authors: [...values.authors, author],
		}));
	};

	const removeAuthor = (id: string) => {
		const newAuthors = inputs.authors.filter((item) => item.id !== id);
		setInputs((values) => ({
			...values,
			authors: newAuthors,
		}));
	};

	return (
		<form className='formContainer'>
			<div className='banner'>
				<h1>Add New Course Form</h1>
			</div>
			{createFormFields.map((field) => {
				return (
					<div key={field.name} className='item'>
						<Input
							value={inputs[field?.name]}
							field={field}
							onChangeText={handleChangeText}
						/>
					</div>
				);
			})}

			<AuthorForm
				handleSaveAuthor={handleSaveAuthor}
				removeAuthor={removeAuthor}
				existAuthors={inputs.authors}
			/>
			<div className='btn-block'>
				<Button
					text={course ? 'Update Course' : 'Add Course'}
					onClick={() => handleCourse(inputs)}
				/>
				<Button text='Cancel' onClick={closeHandler} />
			</div>
		</form>
	);
};

export default CourseForm;
