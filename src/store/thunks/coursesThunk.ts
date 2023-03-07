import { createAsyncThunk } from '@reduxjs/toolkit';
import { TCourses } from 'src/types/course';

import courseApi from 'src/webClient';
import { USER_TOKEN } from '../../constants';
import { getValue } from '../../helpers/localStorageHelper';
import { AddCourseType } from '../types/AddCourseType';
import { EditCourseType } from '../types/EditCourseType';
import { IRootState } from '../rootReducer';
import { IAppDispatch } from '../store';

export const fetchAllCourses = createAsyncThunk<
	TCourses[],
	void,
	{ dispatch: IAppDispatch; state: IRootState }
>('courses/fetchAllCourses', async (param, { getState }) => {
	const response = await courseApi.get('/courses/all');
	const { authors } = getState();
	const res = response.data.result;
	res.forEach((course) => {
		course.authors = course.authors.map((a) =>
			authors.authors.find((ath) => ath.id === a)
		);
	});
	return res;
});

export const addCourse = createAsyncThunk<
	TCourses,
	AddCourseType,
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
	return {
		...response.data.result,
		authors: response.data.result.authors.map((a) =>
			authors.authors.find((ath) => ath.id === a)
		),
	};
});

export const updateCourse = createAsyncThunk<
	TCourses,
	EditCourseType,
	{ dispatch: IAppDispatch; state: IRootState }
>('courses/updateCourse', async (course, { getState }) => {
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
	const { authors } = getState();
	return {
		...response.data.result,
		authors: response.data.result.authors.map((a) =>
			authors.authors.find((ath) => ath.id === a)
		),
	};
});

export const deleteCourse = createAsyncThunk(
	'courses/deleteCourse',
	async (id: string) => {
		const token = JSON.parse(getValue(USER_TOKEN));
		await courseApi.delete(`/courses/${id}`, {
			headers: {
				Authorization: token,
			},
		});
		return id;
	}
);
