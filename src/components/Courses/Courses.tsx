import React, { useState } from 'react';
import Button from './../../common/Button/Button';
import { TCourses } from 'src/types/course';
import CourseHandler from '../CourseHandler/CourseHandler';
import Modal from 'src/common/Modal/Modal';
import './Courses.css';

type TCoursesProps = {
	courses: TCourses[];
	updateCourseHandler: (course: TCourses) => void;
};

function Courses({ courses, updateCourseHandler }: TCoursesProps) {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const toggleModal = () => setOpenModal(!openModal);
	const updateCourse = (toUpdate: TCourses) => {
		toggleModal();
		updateCourseHandler(toUpdate);
	};
	return (
		<ul className='courseList'>
			{courses.map((course) => {
				return (
					<li key={course.name} className='courseFlexContainer'>
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
							<Button text='Show course' onClick={toggleModal} />
							{openModal && (
								<Modal>
									<CourseHandler
										closeHandler={toggleModal}
										addNewCourse={updateCourse}
										course={course}
									/>
								</Modal>
							)}
						</div>
					</li>
				);
			})}
		</ul>
	);
}
export default Courses;
