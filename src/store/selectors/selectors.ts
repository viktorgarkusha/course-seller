import { IRootState } from '../rootReducer';

export const selectUser = (state: IRootState) => state.user;
export const selectCourses = (state: IRootState) => state.courses.courses;
