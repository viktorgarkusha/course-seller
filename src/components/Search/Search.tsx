import React from 'react';

import Button from 'src/common/Button/Button';

import { TCourses } from 'src/types/course';
import { useToggle } from 'src/hooks/useToggle';

import './Search.css';
import { useNavigate } from 'react-router-dom';

export type SearchProps = {
	onCreate?: (course: TCourses) => void;
};

const Search = ({ onCreate }) => {
	const navigate = useNavigate();
	function addNewCourse() {
		navigate('add');
	}

	return (
		<div className='searchFlexContainer'>
			<div className='searchBar'>
				<input className='search' type='search' name='name'></input>
				<Button text='Search' />
			</div>
			<Button text='Add new course' onClick={addNewCourse} />
		</div>
	);
};

export default React.memo(Search);
