import React, { useState } from 'react';
import Button from './../../common/Button/Button';
import { TCourses } from 'src/types/course';
import CreateCourse from '../CreateCourse/CreateCourse';
import Modal from 'src/common/Modal/Modal';
// TODO: please create file Courses.css in the Courses folder and move all styles for this component to the appropriate file

type TCoursesProps = {
	courses: TCourses[];
	updateCourseHandler: (course: TCourses) => void;
};

function Courses({ courses, updateCourseHandler }: TCoursesProps) {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [itemToOpen, setItemToOpen] = useState(null); // TODO: Please remove unused variables and hooks;
	const toggleModal = () => setOpenModal(!openModal);
	const updateCourse = (toUpdate: TCourses) => {
		console.log('Hello'); // TODO: Please remove every console.log;
		toggleModal();
		updateCourseHandler(toUpdate);
	};
	return (
		<ul className='courseList'>
			{courses.map((course) => {
				return (
					<li key={course.name} className='course-flex-container'>
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
									<CreateCourse // TODO: If you want to reuse components please rename it because in this case you ;
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
