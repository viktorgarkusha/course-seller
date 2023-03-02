import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';

import { TAuthor, TCourses } from 'src/types/course';

import Button from 'src/common/Button/Button';
import Input from '../../common/Input/Input';
import AuthorForm from './components/AuthorsForm';

import { createFormFields } from '../../constants';
import { useAppDispatch } from 'src/store/hooks/hooks';

import './CourseForm.css';
import { addCourse } from 'src/store/thunks/coursesThunk';

const CourseForm = () => {
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
				duration: parseInt(inputs.duration.toString()),
				authors: inputs.authors,
				creationDate: new Date().toDateString(),
			})
		).then(() => navigate('/courses'));
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
					<Button text='Cancel' onClick={() => navigate('/courses')} />
				</div>
			</form>
		</div>
	);
};

export default CourseForm;
