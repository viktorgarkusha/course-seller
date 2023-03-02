import React, { useCallback, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import Courses from '../Courses/Courses';
import Search from '../Search/Search';

import { TCourses } from '../../types/course';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { updateCourse } from '../../store/thunks/coursesThunk';
import { selectUser, selectCourses } from '../../store/selectors/selectors';

function CourseContainer() {
	const user = useAppSelector(selectUser);
	const courses = useAppSelector(selectCourses);
	const dispatch = useAppDispatch();

	const updateCourseHandler = useCallback((course: TCourses) => {
		dispatch(updateCourse(course));
	}, []);

	if (!user.isAuth) {
		return <Navigate to='/login' replace />;
	}
	return (
		<>
			<Search />
			<Courses courses={courses} updateCourseHandler={updateCourseHandler} />
		</>
	);
}

export default CourseContainer;
