import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAuthor } from 'src/types/course';

import courseApi from 'src/webClient';

import { USER_TOKEN } from '../../constants';
import { getValue } from '../../helpers/localStorageHelper';

export const fetchAllAuthors = createAsyncThunk(
	'authors/fetchAllAuthors',
	async () => {
		const response = await courseApi.get('/authors/all');
		return response.data.result;
	}
);

export const addAuthor = createAsyncThunk(
	'authors/addAuthor',
	async (author: TAuthor) => {
		const token = JSON.parse(getValue(USER_TOKEN));
		const response = await courseApi.post(
			'/authors/add',
			{ name: 'VikTOR' },
			{
				headers: {
					Authorization: token,
				},
			}
		);
		return response.data.result;
	}
);
