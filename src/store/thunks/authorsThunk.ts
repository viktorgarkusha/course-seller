import { createAsyncThunk } from '@reduxjs/toolkit';

import courseApi from 'src/webClient';

import { SaveAuthorType } from '../types/saveAuthorType';

export const fetchAllAuthors = createAsyncThunk(
	'authors/fetchAllAuthors',
	async () => {
		const response = await courseApi.get('/authors/all');
		return response.data.result;
	}
);

export const addAuthor = createAsyncThunk(
	'authors/addAuthor',
	async (author: SaveAuthorType) => {
		const response = await courseApi.post(
			'/authors/add',
			JSON.stringify(author)
		);
		return response.data.result;
	}
);
