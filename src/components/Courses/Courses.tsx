import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks/hooks';
import CourseItem from './components/CourseItem/CourseItem';

import { TCourses } from '../../types/course';
import { fetchAllCourses } from '../../store/thunks/coursesThunk';
import { fetchAllAuthors } from '../../store/thunks/authorsThunk';

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
