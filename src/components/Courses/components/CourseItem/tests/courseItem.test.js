import { render, screen } from '../../../../../testUtils';
import CourseItem from '../CourseItem';

import { getAuthorNames } from '../../../../../helpers/getAuthorNames';
import { getDurationString } from '../../../../../helpers/getDuration';

const course = {
	id: '111',
	title: 'Course for test',
	description: 'Some short description',
	duration: 120,
	authors: [
		{ id: '1234', name: 'Super Author' },
		{ id: '4321', name: 'Author' },
	],
};
describe('CourseItem', () => {
	it('renders CourseItem component', () => {
		render(<CourseItem listKey='123' course={course} />);
		//screen.debug();
		expect(screen.getByText('Course for test')).toBeInTheDocument();
		expect(screen.getByText('Some short description')).toBeInTheDocument();
		expect(
			screen.getByText(getAuthorNames(course.authors))
		).toBeInTheDocument();
		expect(
			screen.getByText(getDurationString(course.duration))
		).toBeInTheDocument();
		const duration = screen.getByText('Duration:');
	});
});
