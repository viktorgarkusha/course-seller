import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserType } from '../../types/user';
import { fetchUserRole, logout } from '../thunks/userThunk';

export type UserInitialStateType = {
	user: UserType;
};

const initialState = {
	user: {
		name: '',
		email: '',
		token: '',
		isAuth: false,
		role: '',
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
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserRole.fulfilled, (state, action) => {
				state.user.isAuth = true;
				state.user.name = action.payload.name;
				state.user.email = action.payload.email;
				state.user.token = action.payload.token;
				state.user.role = action.payload.role;
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.user.isAuth = false;
				state.user.name = '';
				state.user.email = '';
				state.user.token = '';
				state.user.role = '';
			});
	},
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
