import { createAsyncThunk } from '@reduxjs/toolkit';

import courseApi from 'src/webClient';

export const fetchAllCourses = createAsyncThunk(
	'courses/fetchAllCourses',
	async () => {
		const response = await courseApi.get('/courses/all');
		return response.data.result;
	}
);
