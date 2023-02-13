import React from 'react';
import CourseItem from './components/CourseItem/CourseItem';

import { TCourses } from '../../types/course';

import './Courses.css';

type TCoursesProps = {
	courses: TCourses[];
};

function Courses({ courses }: TCoursesProps) {
	return (
		<ul className='courseList'>
			{courses.map((course) => {
				return <CourseItem key={course.id} course={course} />;
			})}
		</ul>
	);
}
export default Courses;
