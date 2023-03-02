import { createAsyncThunk } from '@reduxjs/toolkit';

import courseApi from 'src/webClient';
import { getValue } from '../../helpers/localStorageHelper';
import { USER_TOKEN } from '../../constants';

export const fetchUserRole = createAsyncThunk(
	'users/fetchUserRole',
	async () => {
		const token = JSON.parse(getValue(USER_TOKEN));
		const response = await courseApi.get('/users/me', {
			headers: {
				Authorization: token,
			},
		});
		return response.data.result;
	}
);

export const logout = createAsyncThunk('users/logout', async () => {
	const token = JSON.parse(getValue(USER_TOKEN));
	const response = await courseApi.delete('/logout', {
		headers: {
			Authorization: token,
		},
	});
	return response.data;
});
