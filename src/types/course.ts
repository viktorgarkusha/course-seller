export type TCourses = {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors?: TAuthor[];
};

export type TAuthor = {
	id: string;
	name: string;
};
