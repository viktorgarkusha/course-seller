import React, { useState, useCallback } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import Courses from './components/Courses/Courses';
import Search from './components/Search/Search';

import { TCourses } from './types/course';
import { courses as data } from './constants';

function CourseContainer() {
	const [courses, setCourses] = useState<TCourses[]>(data);

	const createCourseHandler = useCallback((course: TCourses) => {
		setCourses((prevState) => {
			return [...prevState, course];
		});
	}, []);
	const updateCourseHandler = useCallback((course: TCourses) => {
		setCourses((prevState) => {
			const updated = prevState.map((c) => (c.id === course.id ? course : c));
			return updated;
		});
	}, []);

	const isLoggedIn = localStorage.getItem('userInfo');

	if (!isLoggedIn) {
		return <Navigate to='/login' replace />;
	}
	return (
		<>
			<Search onCreate={createCourseHandler} />
			<Courses courses={courses} updateCourseHandler={updateCourseHandler} />
		</>
	);
}

export default CourseContainer;
