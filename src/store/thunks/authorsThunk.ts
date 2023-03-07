import { createAsyncThunk } from '@reduxjs/toolkit';

import courseApi from 'src/webClient';

import { USER_TOKEN } from '../../constants';
import { getValue } from '../../helpers/localStorageHelper';
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
		const token = JSON.parse(getValue(USER_TOKEN));
		const response = await courseApi.post(
			'/authors/add',
			JSON.stringify(author),
			{
				headers: {
					Authorization: token,
				},
			}
		);
		return response.data.result;
	}
);
