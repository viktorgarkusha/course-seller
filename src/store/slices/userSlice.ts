import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserType } from '../../types/user';

export const userSlice = createSlice({
	name: 'users',
	initialState: {
		name: '',
		email: '',
		token: '',
		isAuth: false,
	} as UserType,
	reducers: {
		login: (state, action: PayloadAction<UserType>) => {
			state.isAuth = true;
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.token = action.payload.token;
		},
		logout: (state, action) => {
			state.isAuth = false;
			state.name = '';
			state.email = '';
			state.token = '';
		},
	},
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
