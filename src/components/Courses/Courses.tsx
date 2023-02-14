import React from 'react';
import CourseItem from './components/CourseItem/CourseItem';

import { TCourses } from '../../types/course';

import './Courses.css';

type TCoursesProps = {
	courses: TCourses[];
	updateCourseHandler: (course: TCourses) => void;
};

function Courses({ courses, updateCourseHandler }: TCoursesProps) {
	return (
		<ul className='courseList'>
			{courses.map((course) => {
				return (
					<CourseItem
						key={course.id}
						course={course}
						updateCourseHandler={updateCourseHandler}
					/>
				);
			})}
		</ul>
	);
}
export default Courses;
