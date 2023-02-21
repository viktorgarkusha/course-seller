import React, { useState } from 'react';

import { TAuthor, TCourses } from 'src/types/course';

import Button from 'src/common/Button/Button';
import Input from '../../common/Input/Input';
import AuthorForm from './components/AuthorsForm';

import { createFormFields } from '../../constants';

import './CourseForm.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { getValue, putValue } from 'src/helpers/localStorageHelper';

export type TCourseForm = {
	closeHandler: () => void;
	handleCourse: (course: TCourses) => void;
};

const CourseForm = ({ closeHandler, handleCourse }: TCourseForm) => {
	const navigate = useNavigate();
	const [inputs, setInputs] = useState<TCourses>({
		id: '',
		title: '',
		description: '',
		duration: 1,
		authors: [],
		creationDate: new Date().toDateString(),
	});
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

	const saveCourse = () => {
		const courses = JSON.parse(getValue('courses'));
		courses.push(inputs);
		putValue('courses', JSON.stringify(courses));
		navigate('/courses');
	};

	return (
		<div className='formWrapper'>
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
					<Button text='Add Course' onClick={saveCourse} />
					<Button text='Cancel' onClick={closeHandler} />
				</div>
			</form>
		</div>
	);
};

export default CourseForm;
