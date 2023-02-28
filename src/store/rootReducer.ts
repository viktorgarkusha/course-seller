import { combineReducers } from '@reduxjs/toolkit';

import coursesReducer from './slices/courseSlice';
import authorReducer from './slices/authorSlice';
import userReducer from './slices/userSlice';

export const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorReducer,
	user: userReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
