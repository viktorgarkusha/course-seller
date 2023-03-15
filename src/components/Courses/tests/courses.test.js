import { render, screen, fireEvent } from '../../../testUtils';
import Courses from '../Courses';

const courses = [
	{
		id: '01',
		title: 'Course for test',
		description: 'Some short description',
		duration: 120,
		authors: [
			{ id: '1234', name: 'Super Author' },
			{ id: '4321', name: 'Author' },
		],
	},
	{
		id: '02',
		title: 'Course for test 2',
		description: 'Some short description 2',
		duration: 180,
		authors: [
			{ id: '1', name: 'Author' },
			{ id: '2', name: 'Test' },
		],
	},
];
describe('CourseItem', () => {
	it('renders CourseItem component', () => {
		render(<Courses courses={courses} />);
		//screen.debug();
		expect(screen.getByTitle('courseList').children.length).toEqual(
			courses.length
		);
	});
});
