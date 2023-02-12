import React, { useState, useCallback } from 'react';
import Courses from './components/Courses/Courses';
import Layout from './common/Layout/Layout';
import Search from './components/Search/Search';
import { TCourses } from './types/course';
import { courses as data } from './constants';

function App() {
	const [courses, setCourses] = useState<TCourses[]>(data);

	const createCourseHandler = useCallback((course: TCourses) => {
		setCourses((prevState) => {
			return [...prevState, course];
		});
	}, []);
	const updateCourseHandler = useCallback((course: TCourses) => {
		setCourses((prevState) => {
			const index = prevState.findIndex((c) => c.name === course.name);
			prevState[index] = course;
			return prevState;
		});
	}, []);
	return (
		<Layout>
			<Search onCreate={createCourseHandler} />
			<Courses courses={courses} updateCourseHandler={updateCourseHandler} />
		</Layout>
	);
}

export default App;
