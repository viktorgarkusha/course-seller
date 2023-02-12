import React, { useState } from 'react';
import Button from 'src/common/Button/Button';
import { TCourses } from 'src/types/course';
import Modal from 'src/common/Modal/Modal';
import CourseHandler from '../CourseHandler/CourseHandler';
import './Search.css';

export type SearchProps = {
	onCreate: (course: TCourses) => void;
};

const Search = ({ onCreate }) => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const toggleModal = () => setOpenModal(!openModal);
	function addNewCourse(course: TCourses) {
		toggleModal();
		onCreate(course);
	}

	return (
		<div className='searchFlexContainer'>
			<div>
				<input className='search' type='search' name='name'></input>
				<Button text='Search' />
			</div>
			<Button text='Add new course' onClick={toggleModal} />
			{openModal && (
				<Modal>
					<CourseHandler
						closeHandler={toggleModal}
						addNewCourse={addNewCourse}
					/>
				</Modal>
			)}
		</div>
	);
};

export default React.memo(Search);
