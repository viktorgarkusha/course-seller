import React from 'react';
import dayjs from 'dayjs';

import { useLocation, Link } from 'react-router-dom';

import { getAuthorNames } from 'src/helpers/getAuthorNames';
import { getDurationString } from 'src/helpers/getDuration';

import './CourseInfo.css';

const CourseInfo = () => {
	const location = useLocation();
	const course = location.state;

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
