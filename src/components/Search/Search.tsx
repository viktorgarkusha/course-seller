import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'src/common/Button/Button';

import './Search.css';

const Search = () => {
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
