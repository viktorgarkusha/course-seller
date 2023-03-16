import reducer from '../slices/courseSlice';
import { addCourse } from '../thunks/coursesThunk';

describe('CourseResucer', () => {
	const innitialState = { courses: [] };
	it('returns course innitial state', () => {
		expect(reducer(undefined, {})).toStrictEqual(innitialState);
	});

	it('returns new State', () => {
		const innitialState = { courses: [] };
		const newCourse = {
			title: 'Test title',
			description: 'Test description',
			duration: 120,
			authors: [],
			creationDate: new Date().toDateString(),
		};
		expect(
			reducer(innitialState, addCourse.fulfilled(newCourse))
		).toStrictEqual({ courses: [newCourse] });
	});
});
