import React, { useState } from 'react';
import './CreateCourse.css';
import { TCourses } from 'src/types/course';

export type TCreateCourse = {
	closeHandler: () => void;
	addNewCourse: (course: TCourses) => void;
	course?: TCourses;
};

export type TCreateForm = {
	// TODO: Please move it top the types folder;
	name: string;
	type: string;
	label: string;
	placeHolder: string;
};

const fields: TCreateForm[] = [
	// TODO: Please move it top the constants file;
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

const CreateCourse = ({
	closeHandler,
	addNewCourse,
	course,
}: TCreateCourse) => {
	console.log('THIS IS COURSE' + course); // TODO: Please remove every console.log;
	const [inputs, setInputs] = useState<TCourses>(
		course === undefined // TODO: you don't need checking  here;
			? {
					name: '',
					description: '',
					authors: [],
					duration: '',
					created: '',
			  }
			: course
	);

	//const handleSubmit = () => {console.log("Hello)}
	const handleChange = (event) => {
		const name = event.target.name;
		let value = event.target.value;
		if (name === 'authors') {
			value = value.split(','); // TODO: what if there is no comma??;
		}
		setInputs((values) => ({ ...values, [name]: value }));
		console.log(inputs); // TODO: Please remove every console.log;
	};
	return (
		<div className='testbox'>
			<form>
				<div className='banner'>
					<h1>Add New Course Form</h1>
				</div>
				{fields.map((f) => {
					// TODO: please rename variable f to input or fieald or use destructuring;
					return (
						<div className='item'>
							<p className='fieldName'>{f.label}</p>
							{f.type !== 'textarea' && (
								<input // TODO: let's disscus on mondey;
									type={f.type}
									name={f.name}
									value={inputs[f.name] || ''}
									placeholder={f.placeHolder}
									onChange={handleChange}
								/>
							)}
							{f.type === 'date' && <i className='fas fa-calendar-alt'></i>}
							{f.type === 'textarea' && (
								<textarea // TODO: let's disscus on mondey;
									rows='3' // TODO: pay attention to TS errors (Type 'string' is not assignable to type 'number') 3 - should be a number rows={3};
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
						{' '}
						{/* TODO: for what empty string */}
						{/* TODO: please rename variable f to input or fieald or use destructuring; */}
						{course === undefined ? 'Add' : 'Update'}{' '}
						{/* you can avoid checking for an undefined value. course ? "Add": "Update" */}
					</button>
					<button className='bottom' onClick={closeHandler}>
						{/* TODO:you already have Button component, what do you use the tag for???? */}
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateCourse;
