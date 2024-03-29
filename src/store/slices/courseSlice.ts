import { createSlice } from '@reduxjs/toolkit';

import { TCourses } from '../../types/course';
import {
	addCourse,
	updateCourse,
	deleteCourse,
	fetchAllCourses,
} from '../thunks/coursesThunk';

export type CourseInitialStateType = {
	courses: TCourses[];
};

const initialState: CourseInitialStateType = { courses: [] };

export const courseSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllCourses.fulfilled, (state, action) => {
				state.courses = action.payload;
			})
			.addCase(addCourse.fulfilled, (state, action) => {
				state.courses.push(action.payload);
			})
			.addCase(updateCourse.fulfilled, (state, action) => {
				const index = state.courses.findIndex(
					(c) => c.id === action.payload.id
				);
				state.courses[index] = action.payload;
			})
			.addCase(deleteCourse.fulfilled, (state, action) => {
				state.courses = state.courses.filter((c) => c.id !== action.payload);
			});
	},
});

export default courseSlice.reducer;
