import { createAsyncThunk } from '@reduxjs/toolkit';

import courseApi from 'src/webClient';
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
		const response = await courseApi.get('/users/me');
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
	const response = await courseApi.delete('/logout');
	return response.data;
});
