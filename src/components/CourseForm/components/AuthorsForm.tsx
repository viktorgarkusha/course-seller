import React, { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from 'src/common/Button/Button';
import Input from 'src/common/Input/Input';

import { TAuthor } from 'src/types/course';

import './AuthorForm.css';

const input = {
	name: 'author',
	label: 'Author',
	type: 'text',
	placeHolder: 'Enter author name',
};

export type TAuthorForm = {
	handleSaveAuthor: (author: TAuthor) => void;
	removeAuthor: (id: string) => void;
	existAuthors: TAuthor[];
};

const AuthorForm = ({ handleSaveAuthor, existAuthors, removeAuthor }) => {
	const [authors, setAuthors] = useState<TAuthor[]>([]);
	const [value, setValue] = useState<string>('');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const addAuthor = useCallback(() => {
		value.length &&
			setAuthors((state) => [...state, { name: value, id: uuidv4() }]);
		setValue('');
	}, [value]);

	return (
		<div className='authorContainer'>
			<div className='authorInput'>
				<h2>Add author</h2>
				<div className='controls'>
					<Input field={input} onChangeText={handleChange} value={value} />
					<Button text='Create author' onClick={addAuthor} />
				</div>
			</div>
			<div className=''>
				<div className='authorsResult'>
					<h2>Authors</h2>

					{authors.map(({ name, id }) => {
						return (
							<div key={id} className='controls'>
								<span className='authorName'>{name}</span>
								<Button
									text='Add author'
									onClick={() => handleSaveAuthor({ name, id })}
								/>
							</div>
						);
					})}
				</div>
				<div className=''>
					<h2>Course Authors</h2>

					{existAuthors.map(({ name, id }) => {
						return (
							<div key={id} className='controls'>
								<span className='authorName'>{name}</span>
								<Button text='Delete author' onClick={() => removeAuthor(id)} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default React.memo(AuthorForm);
