import { IRootState } from '../rootReducer';

export const selectUser = (state: IRootState) => state.user.user;
export const selectCourses = (state: IRootState) => state.courses.courses;
export const selectAuthors = (state: IRootState) => state.authors.authors;
export const istUserAuthentificated = (state: IRootState) =>
	state.user.user.isAuth;
