import { createAsyncThunk } from '@reduxjs/toolkit';

import courseApi from 'src/webClient';
import { getValue } from '../../helpers/localStorageHelper';
import { USER_TOKEN } from '../../constants';
import { UserType } from '../../types/user';
import { IRootState } from '../rootReducer';
import { IAppDispatch } from '../store';

export const fetchUserRole = createAsyncThunk<
	UserType,
	void,
	{ dispatch: IAppDispatch; state: IRootState }
>(
	'users/fetchUserRole',
	async () => {
		const token = JSON.parse(getValue(USER_TOKEN));
		const response = await courseApi.get('/users/me', {
			headers: {
				Authorization: token,
			},
		});
		return response.data.result;
	},
	{
		condition: (arg, { getState }) => {
			const { user } = getState();
			if (user.user.role) {
				return false;
			}
			return true;
		},
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
