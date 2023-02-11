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
			console.log(prevState);
			const result = [...prevState, course];
			console.log('New courses are ' + result);
			return result;
		});
	}, []);
	return (
		<Layout>
			<Search onCreate={createCourseHandler} />
			<Courses courses={courses} />
		</Layout>
	);
}

export default App;
