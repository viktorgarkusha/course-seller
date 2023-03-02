import { createAsyncThunk } from '@reduxjs/toolkit';
import { TCourses } from 'src/types/course';

import courseApi from 'src/webClient';
import { USER_TOKEN } from '../../constants';
import { getValue } from '../../helpers/localStorageHelper';

export const fetchAllCourses = createAsyncThunk(
	'courses/fetchAllCourses',
	async () => {
		const response = await courseApi.get('/courses/all');
		return response.data.result;
	}
);

export const addCourse = createAsyncThunk(
	'courses/addCourse',
	async (course: TCourses) => {
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
		return course;
	}
);

export const updateCourse = createAsyncThunk(
	'courses/updateCourse',
	async (course: TCourses) => {
		const token = JSON.parse(getValue(USER_TOKEN));
		const response = await courseApi.put(
			`/courses/add/${course.id}`,
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
		const userInfo = JSON.parse(getValue(USER_TOKEN));
		const response = await courseApi.delete(`/courses/${id}`, {
			headers: {
				Authorization: userInfo.token,
			},
		});
		return id;
	}
);
