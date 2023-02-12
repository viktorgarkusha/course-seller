import React, { useState } from 'react';
import './CourseHandler.css';
import { TCourses } from 'src/types/course';
import Button from 'src/common/Button/Button';
import { createFormFields } from '../../constants';
import Input from '../../common/Input/Input';

export type TCreateCourse = {
	closeHandler: () => void;
	addNewCourse: (course: TCourses) => void;
	course?: TCourses;
};

const CourseHandler = ({
	closeHandler,
	addNewCourse,
	course,
}: TCreateCourse) => {
	const [inputs, setInputs] = useState<TCourses>(
		course === undefined // TODO: you don't need checking  here;
			? //Checked - I can pass as the default value, but I need undefined to understand that it is for editing, not for creation
			  //or I need to add additional variable
			  {
					name: '',
					description: '',
					authors: [],
					duration: '',
					created: '',
			  }
			: course
	);
	const handleChange = (event) => {
		const name = event.target.name;
		let value = event.target.value;
		if (name === 'authors') {
			value = value.split(','); // TODO: what if there is no comma??;
			//Checked - this was just for stub, not more
		}
		setInputs((values) => ({ ...values, [name]: value }));
	};
	return (
		<div className='testbox'>
			<form>
				<div className='banner'>
					<h1>Add New Course Form</h1>
				</div>
				{createFormFields.map((field) => {
					return (
						<div className='item'>
							<p className='fieldName'>{field.label}</p>
							{field.type !== 'textarea' && (
								<Input course={inputs} field={field} onChange={handleChange} />
							)}

							{field.type === 'date' && <i className='fas fa-calendar-alt'></i>}
							{field.type === 'textarea' && (
								<textarea // TODO: let's disscus on mondey;
									rows={3}
									name={field.name}
									value={inputs[field.name] || ''}
									placeholder={field.placeHolder}
									onChange={handleChange}
								></textarea>
							)}
						</div>
					);
				})}
				<div className='btn-block'>
					<Button
						text={course ? 'Update' : 'Add'}
						onClick={() => addNewCourse(inputs)}
					/>
					<Button text='Cancel' onClick={closeHandler} />
				</div>
			</form>
		</div>
	);
};

export default CourseHandler;
