import { render, screen } from '../../../../../testUtils';
import CourseItem from '../CourseItem';

import dayjs from 'dayjs';

import { getAuthorNames } from '../../../../../helpers/getAuthorNames';
import { getDurationString } from '../../../../../helpers/getDuration';

const course = {
	id: '111',
	title: 'Title',
	description: 'Description',
	duration: 120,
	authors: [
		{ id: '1234', name: 'Super Author' },
		{ id: '4321', name: 'Author' },
	],
	creationDate: new Date(),
};
describe('CourseItem', () => {
	it('renders CourseItem component', () => {
		render(<CourseItem listKey='123' course={course} />);
		expect(screen.getByText('Title')).toBeInTheDocument();
		expect(screen.getByText('Description')).toBeInTheDocument();
		expect(
			screen.getByText(getAuthorNames(course.authors))
		).toBeInTheDocument();
		expect(
			screen.getByText(getDurationString(course.duration))
		).toBeInTheDocument();
		expect(
			screen.getByText(dayjs(course.creationDate).format('DD.MM.YYYY'))
		).toBeInTheDocument();
	});
});
