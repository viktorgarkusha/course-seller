import React from 'react';

import Courses from '../Courses/Courses';
import Search from '../Search/Search';

import { useAppSelector } from '../../store/hooks/hooks';
import { selectCourses } from '../../store/selectors/selectors';

function CourseContainer() {
	const courses = useAppSelector(selectCourses);
	return (
		<>
			<Search />
			<Courses courses={courses} />
		</>
	);
}

export default CourseContainer;
