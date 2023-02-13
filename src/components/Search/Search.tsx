import React from 'react';

import Button from 'src/common/Button/Button';
import Modal from 'src/common/Modal/Modal';
import CourseForm from '../CourseForm/CourseForm';

import { TCourses } from 'src/types/course';
import { useToggle } from 'src/hooks/useToggle';

import './Search.css';

export type SearchProps = {
	onCreate: (course: TCourses) => void;
};

const Search = ({ onCreate }) => {
	const { open, toggle } = useToggle();
	function addNewCourse(course: TCourses) {
		toggle();
		onCreate(course);
	}

	return (
		<div className='searchFlexContainer'>
			<div className='searchBar'>
				<input className='search' type='search' name='name'></input>
				<Button text='Search' />
			</div>
			<Button text='Add new course' onClick={toggle} />
			{open && (
				<Modal onClose={toggle}>
					<CourseForm closeHandler={toggle} addNewCourse={addNewCourse} />
				</Modal>
			)}
		</div>
	);
};

export default React.memo(Search);
