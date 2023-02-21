import React from 'react';
import dayjs from 'dayjs';

import { useNavigate, useLocation, Link } from 'react-router-dom';

import Button from '../../common/Button/Button';

import { TCourses } from '../../types/course';
import { getAuthorNames } from 'src/helpers/getAuthorNames';
import { getDurationString } from 'src/helpers/getDuration';

import './CourseInfo.css';

export type TCourseItem = {
	course?: TCourses;
	updateCourseHandler?: (course: TCourses) => void;
};

const CourseInfo = ({ course, updateCourseHandler }) => {
	const navigate = useNavigate();
	const location = useLocation();
	course = location.state;

	const showCourse = () => {
		navigate(course.id, { state: course });
	};
	return (
		<>
			<Link className='customLink' to='/courses'>
				Back to courses
			</Link>
			<h2 className='myh2'>{course.title}</h2>
			<div className='course'>
				<div className='courseDescription'>
					<p>{course.description}</p>
				</div>
				<div className='courseInformation'>
					<p>
						<strong className='subtitle'>ID:</strong>
						{course.id}
					</p>
					<p>
						<strong className='subtitle'>Duration:</strong>
						{getDurationString(course.duration)}
					</p>
					<p>
						<strong className='subtitle'>Created:</strong>{' '}
						{dayjs(course.creationDate).format('DD.MM.YYYY')}
					</p>
					<p>
						<strong className='subtitle'>Authors:</strong>
						{getAuthorNames(course.authors)}
					</p>
				</div>
			</div>
		</>
	);
};

export default React.memo(CourseInfo);
