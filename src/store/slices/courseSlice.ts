import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit';

import { TCourses } from '../../types/course';
import { fetchAllCourses } from '../thunks/coursesThunk';

export type CourseInitialStateType = {
	courses: TCourses[];
};

const initialState: CourseInitialStateType = { courses: [] };

export const courseSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		addCourse: (state, action) => {
			state.courses.push(action.payload);
		},
		deleteCourse: (state, action) => {
			state.courses = state.courses.filter((c) => c.id !== action.payload);
		},
		updateCourse: (state, action) => {
			const index = state.courses.findIndex((c) => c.id === action.payload.id);
			state.courses[index] = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAllCourses.fulfilled, (state, action) => {
			state.courses = action.payload;
		});
	},
});

export const { addCourse, deleteCourse, updateCourse } = courseSlice.actions;

export default courseSlice.reducer;
