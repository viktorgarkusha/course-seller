import React, { useState } from 'react';

import Button from './../../common/Button/Button';
import CourseForm from '../CourseForm/CourseForm';
import Modal from 'src/common/Modal/Modal';
import CourseItem from './components/CourseItem/CourseItem';

import { TCourses } from '../../types/course';
import { getAuthorNames } from '../../helpers/getAuthorNames';

import './Courses.css';

type TCoursesProps = {
	courses: TCourses[];
};

function Courses({ courses }: TCoursesProps) {
	return (
		<ul className='courseList'>
			{courses.map((course) => {
				return <CourseItem course={course} />;
			})}
		</ul>
	);
}
export default Courses;
