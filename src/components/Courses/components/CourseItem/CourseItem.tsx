import React from 'react';

import Button from '../../../../common/Button/Button';
import CourseForm from '../../../CourseForm/CourseForm';
import Modal from '../../../../common/Modal/Modal';

import { TCourses } from '../../../../types/course';
import { useToggle } from '../../../../hooks/useToggle';
import { getAuthorNames } from '../../../../helpers/getAuthorNames';

export type TCourseItem = {
	course: TCourses;
};

const CourseItem = ({ course }) => {
	const { open, toggle } = useToggle();
	return (
		<li key={course.id} className='courseFlexContainer'>
			<div className='description'>
				<h2>{course.title}</h2>
				<p>{course.description}</p>
			</div>
			<div className='information'>
				<p>
					<strong>Authors</strong>:{getAuthorNames(course.authors)}
				</p>
				<p>
					<strong>Duration</strong>: {course.duration}
				</p>
				<p>
					<strong>Created</strong>: {course.creationDate}
				</p>
				<Button text='Show course' onClick={toggle} />
				{open && (
					<Modal onClose={toggle}>
						<CourseForm closeHandler={toggle} course={course} />
					</Modal>
				)}
			</div>
		</li>
	);
};

export default React.memo(CourseItem);
