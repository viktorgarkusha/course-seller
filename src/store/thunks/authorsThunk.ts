import { createAsyncThunk } from '@reduxjs/toolkit';

import courseApi from 'src/webClient';

export const fetchAllAuthors = createAsyncThunk(
	'authors/fetchAllAuthors',
	async () => {
		const response = await courseApi.get('/authors/all');
		return response.data.result;
	}
);
