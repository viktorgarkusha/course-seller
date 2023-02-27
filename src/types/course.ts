export type TCourses = {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: TAuthor[];
};

export type TAuthor = {
	id: string;
	name: string;
};

export enum CoursesActionTypes {
	SAVE_COURSES = 'SAVE_COURSES',
	ADD_COURSE = 'ADD_COURSE',
	DELETE_COURSE = 'DELETE_COURSE',
}
