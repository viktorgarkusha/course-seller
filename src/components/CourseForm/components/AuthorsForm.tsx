import React, { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from 'src/common/Button/Button';
import Input from 'src/common/Input/Input';

import { TAuthor } from 'src/types/course';

import { useAppDispatch, useAppSelector } from 'src/store/hooks/hooks';
import { addAuthor } from 'src/store/slices/authorSlice';

import './AuthorForm.css';
import { selectAuthors } from 'src/store/selectors/selectors';

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
	const [value, setValue] = useState<string>('');
	const dispatch = useAppDispatch();
	const authors = useAppSelector(selectAuthors);

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const addAuthorToTheStore = useCallback(() => {
		value.length && dispatch(addAuthor({ name: value, id: uuidv4() }));
		setValue('');
	}, [value]);

	const isAuthorAddedToTheCourse = (id: string) => {
		return existAuthors.find((a) => a.id === id) && true;
	};

	return (
		<div className='authorContainer'>
			<div className='authorInput'>
				<h2>Add author</h2>
				<div className='controls'>
					<Input field={input} onChangeText={handleChange} value={value} />
					<Button text='Create author' onClick={addAuthorToTheStore} />
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
									text={isAuthorAddedToTheCourse(id) ? 'Added' : 'Add author'}
									onClick={
										isAuthorAddedToTheCourse(id)
											? undefined
											: () => handleSaveAuthor({ name, id })
									}
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
