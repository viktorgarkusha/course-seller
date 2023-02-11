import React from 'react';
import Button from './../../common/Button/Button';
import { TCourses } from 'src/types/course';

type TCoursesProps = {
	courses: TCourses[];
};

function Courses({ courses }: TCoursesProps) {
	console.log(courses);
	return (
		<ul className='courseList'>
			{courses.map((course) => {
				return (
					<li className='course-flex-container'>
						<div className='description'>
							<h2>{course.name}</h2>
							<p>{course.description}</p>
						</div>
						<div className='information'>
							<p>
								<strong>Authors</strong>: {course.authors.join(',')}
							</p>
							<p>
								<strong>Duration</strong>: {course.duration}
							</p>
							<p>
								<strong>Created</strong>: {course.created}
							</p>
							<Button text='Show course' />
						</div>
					</li>
				);
			})}
		</ul>
	);
}
export default Courses;
