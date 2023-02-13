import { TAuthor } from '../types/course';

export const getAuthorNames = (authors: TAuthor[]) =>
	authors?.map((author) => author.name).join(',');
