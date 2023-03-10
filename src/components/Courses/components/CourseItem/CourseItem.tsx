import React from 'react';
import dayjs from 'dayjs';

import Button from '../../../../common/Button/Button';

import { TCourses } from '../../../../types/course';
import { getAuthorNames } from '../../../../helpers/getAuthorNames';
import { getDurationString } from '../../../../helpers/getDuration';
import { useNavigate } from 'react-router-dom';
import deleteButton from '../../../../public/delete-button.svg';
import editButton from '../../../../public/edit-pencil-write.svg';
import { useAppDispatch, useAppSelector } from 'src/store/hooks/hooks';
import { deleteCourse } from 'src/store/thunks/coursesThunk';
import { selectUser } from 'src/store/selectors/selectors';

export type TCourseItem = {
	course: TCourses;
};

const CourseItem = ({ course }) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);

	const showCourse = () => {
		navigate(course.id, { state: course });
	};
	const editCourse = () => {
		navigate(`update/${course.id}`, { state: course });
	};
	const removeCourse = () => {
		dispatch(deleteCourse(course.id));
	};
	return (
		<li className='itemWrapper'>
			<div className='courseItem'>
				<div className='description'>
					<h2>{course.title}</h2>
					<p>{course.description}</p>
				</div>
				<div className='information'>
					<p>
						<strong className='subtitle'>Authors:</strong>
						{getAuthorNames(course.authors)}
					</p>
					<p>
						<strong className='subtitle'>Duration:</strong>
						{getDurationString(course.duration)}
					</p>
					<p>
						<strong className='subtitle'>Created:</strong>{' '}
						{dayjs(course.creationDate).format('DD.MM.YYYY')}
					</p>
					<div className='buttonBlock'>
						<Button text='Show course' onClick={showCourse} />
						{user.role === 'admin' && (
							<>
								<input
									className='imageButton'
									type='image'
									src={editButton}
									onClick={editCourse}
								/>
								<input
									className='imageButton'
									type='image'
									src={deleteButton}
									onClick={removeCourse}
								/>
							</>
						)}
					</div>
				</div>
			</div>
		</li>
	);
};

export default React.memo(CourseItem);
