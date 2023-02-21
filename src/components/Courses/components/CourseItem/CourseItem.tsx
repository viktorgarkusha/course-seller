import React from 'react';
import dayjs from 'dayjs';

import Button from '../../../../common/Button/Button';

import { TCourses } from '../../../../types/course';
import { getAuthorNames } from '../../../../helpers/getAuthorNames';
import { getDurationString } from '../../../../helpers/getDuration';
import { useNavigate } from 'react-router-dom';

export type TCourseItem = {
	course: TCourses;
	updateCourseHandler: (course: TCourses) => void;
};

const CourseItem = ({ course, updateCourseHandler }) => {
	const navigate = useNavigate();

	const showCourse = () => {
		navigate(course.id, { state: course });
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
						<strong className='subtitle'>Duration:</strong>
						{getDurationString(course.duration)}
					</p>
					<p>
						<strong className='subtitle'>Created:</strong>{' '}
						{dayjs(course.creationDate).format('DD.MM.YYYY')}
					</p>
					<Button text='Show course' onClick={showCourse} />
				</div>
			</div>
		</li>
	);
};

export default React.memo(CourseItem);
