import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserType } from '../../types/user';

export type UserInitialStateType = {
	user: UserType;
};

const initialState = {
	user: {
		name: '',
		email: '',
		token: '',
		isAuth: false,
	},
} as UserInitialStateType;

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<UserType>) => {
			state.user.isAuth = true;
			state.user.name = action.payload.name;
			state.user.email = action.payload.email;
			state.user.token = action.payload.token;
		},
		logout: (state, action) => {
			state.user.isAuth = false;
			state.user.name = '';
			state.user.email = '';
			state.user.token = '';
		},
	},
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
