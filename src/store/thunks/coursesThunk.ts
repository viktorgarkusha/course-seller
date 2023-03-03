import { createAsyncThunk } from '@reduxjs/toolkit';
import { TCourses } from 'src/types/course';

import courseApi from 'src/webClient';
import { USER_TOKEN } from '../../constants';
import { getValue } from '../../helpers/localStorageHelper';
import { CourseType } from '../types/CourseType';
import { IRootState } from '../rootReducer';
import { IAppDispatch } from '../store';

export const fetchAllCourses = createAsyncThunk(
	'courses/fetchAllCourses',
	async () => {
		const response = await courseApi.get('/courses/all');
		return response.data.result;
	}
);

export const addCourse = createAsyncThunk<
	TCourses,
	CourseType,
	{ dispatch: IAppDispatch; state: IRootState }
>('courses/addCourse', async (course, { getState }) => {
	const token = JSON.parse(getValue(USER_TOKEN));
	const response = await courseApi.post(
		'/courses/add',
		JSON.stringify(course),
		{
			headers: {
				Authorization: token,
			},
		}
	);
	const { authors } = getState();
	const newCourse: TCourses = {
		...response.data.result,
		authors: response.data.result.authors.map((a) =>
			authors.authors.find((ath) => ath.id === a)
		),
	};
	console.log(newCourse);
	return newCourse;
});

export const updateCourse = createAsyncThunk(
	'courses/updateCourse',
	async (course: TCourses) => {
		const token = JSON.parse(getValue(USER_TOKEN));
		const response = await courseApi.put(
			`/courses/${course.id}`,
			JSON.stringify(course),
			{
				headers: {
					Authorization: token,
				},
			}
		);
		return course;
	}
);

export const deleteCourse = createAsyncThunk(
	'courses/deleteCourse',
	async (id: string) => {
		const token = JSON.parse(getValue(USER_TOKEN));
		console.log(`/courses/${id}`);
		await courseApi.delete(`/courses/${id}`, {
			headers: {
				Authorization: token,
			},
		});
		return id;
	}
);
