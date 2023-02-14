import React from 'react';

import Button from '../../../../common/Button/Button';
import CourseForm from '../../../CourseForm/CourseForm';
import Modal from '../../../../common/Modal/Modal';

import { TCourses } from '../../../../types/course';
import { useToggle } from '../../../../hooks/useToggle';
import { getAuthorNames } from '../../../../helpers/getAuthorNames';

export type TCourseItem = {
	course: TCourses;
	updateCourseHandler: (course: TCourses) => void;
};

const CourseItem = ({ course, updateCourseHandler }) => {
	const { open, toggle } = useToggle();
	const updateCourse = (course: TCourses) => {
		toggle();
		updateCourseHandler(course);
	};
	return (
		<li className='itemWrapper'>
			<div className='courseItem'>
				<div className='description'>
					<h2>{course.title}</h2>
					<p>{course.description}</p>
				</div>
				<div className='information'>
					<p>
						<strong className='subtitle'>Authors:</strong>
						{getAuthorNames(course.authors)}
					</p>
					<p>
						<strong className='subtitle'>Duration:</strong> {course.duration}
					</p>
					<p>
						<strong className='subtitle'>Created:</strong> {course.creationDate}
					</p>
					<Button text='Show course' onClick={toggle} />
					{open && (
						<Modal onClose={toggle}>
							<CourseForm
								closeHandler={toggle}
								handleCourse={updateCourse}
								course={course}
							/>
						</Modal>
					)}
				</div>
			</div>
		</li>
	);
};

export default React.memo(CourseItem);
