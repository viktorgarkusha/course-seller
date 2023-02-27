import React, { useState } from 'react';
import { v4 } from 'uuid';

import { TAuthor, TCourses } from 'src/types/course';

import Button from 'src/common/Button/Button';
import Input from '../../common/Input/Input';
import AuthorForm from './components/AuthorsForm';

import { createFormFields } from '../../constants';
import { addCourse } from '../../store/slices/courseSlice';

import './CourseForm.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/store/hooks/hooks';

export type TCourseForm = {
	closeHandler: () => void;
	handleCourse: (course: TCourses) => void;
};

const CourseForm = ({ closeHandler, handleCourse }: TCourseForm) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
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

	const addAuthorToTheCourse = (author: TAuthor) => {
		setInputs((values) => ({
			...values,
			authors: [...values.authors, author],
		}));
	};

	const removeAuthorFromTheCourse = (id: string) => {
		const newAuthors = inputs.authors.filter((item) => item.id !== id);
		setInputs((values) => ({
			...values,
			authors: newAuthors,
		}));
	};

	const saveCourse = () => {
		dispatch(
			addCourse({
				id: v4(),
				title: inputs.title,
				description: inputs.description,
				duration: inputs.duration,
				authors: inputs.authors,
				creationDate: new Date().toDateString(),
			})
		);
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
					handleSaveAuthor={addAuthorToTheCourse}
					removeAuthor={removeAuthorFromTheCourse}
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
