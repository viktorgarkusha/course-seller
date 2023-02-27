import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit';

import { TAuthor } from '../../types/course';
import { fetchAllAuthors } from '../thunks/authorsThunk';

export type AuthorsInitialStateType = {
	authors: TAuthor[];
};

const initialState = { authors: [] } as AuthorsInitialStateType;

export const authorSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		addAuthor: (state, action) => {
			state.authors.push(action.payload);
		},
		deleteAuthor: (state, action) => {
			state.authors.filter((c) => c.id !== action.payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAllAuthors.fulfilled, (state, action) => {
			state.authors = action.payload;
		});
	},
});

export const { addAuthor, deleteAuthor } = authorSlice.actions;

export default authorSlice.reducer;
