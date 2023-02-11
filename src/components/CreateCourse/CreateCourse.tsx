import React, { useState } from 'react';
import './CreateCourse.css';
import { TCourses } from 'src/types/course';

export type TCreateCourse = {
	closeHandler: () => void;
	addNewCourse: (course: TCourses) => void;
};

export type TCreateForm = {
	name: string;
	type: string;
	label: string;
	placeHolder: string;
};

const fields: TCreateForm[] = [
	{
		name: 'name',
		label: 'Course name',
		type: 'text',
		placeHolder: 'Course name',
	},
	{
		name: 'authors',
		label: 'Authors',
		type: 'text',
		placeHolder: 'Mat Worren, Billy Pop',
	},
	{
		name: 'duration',
		label: 'Duration',
		type: 'text',
		placeHolder: '5h',
	},
	{
		name: 'created',
		label: 'Created',
		type: 'date',
		placeHolder: 'Creation date',
	},
	{
		name: 'description',
		label: 'Short Course Description',
		type: 'textarea',
		placeHolder: 'Short course description',
	},
];

const CreateCourse = ({ closeHandler, addNewCourse }: TCreateCourse) => {
	const [inputs, setInputs] = useState<TCourses>({
		name: '',
		description: '',
		authors: [],
		duration: '',
		created: '',
	});

	//const handleSubmit = () => {console.log("Hello)}
	const handleChange = (event) => {
		const name = event.target.name;
		let value = event.target.value;
		if (name === 'authors') {
			value = value.split(',');
		}
		setInputs((values) => ({ ...values, [name]: value }));
		console.log(inputs);
	};
	return (
		<div className='testbox'>
			<form>
				<div className='banner'>
					<h1>Add New Course Form</h1>
				</div>
				{fields.map((f) => {
					return (
						<div className='item'>
							<p className='fieldName'>{f.label}</p>
							{f.type !== 'textarea' && (
								<input
									type={f.type}
									name={f.name}
									value={inputs[f.name] || ''}
									placeholder={f.placeHolder}
									onChange={handleChange}
								/>
							)}
							{f.type === 'date' && <i className='fas fa-calendar-alt'></i>}
							{f.type === 'textarea' && (
								<textarea
									rows='3'
									name={f.name}
									value={inputs[f.name] || ''}
									placeholder={f.placeHolder}
									onChange={handleChange}
								></textarea>
							)}
						</div>
					);
				})}
				<div className='btn-block'>
					<button type='submit' onClick={() => addNewCourse(inputs)}>
						Add
					</button>
					<button className='bottom' onClick={closeHandler}>
						Close
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateCourse;
