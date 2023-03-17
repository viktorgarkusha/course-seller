import { render, screen, fireEvent } from '../../../testUtils';
import CourseContainer from '../CourseContainer';

const courses = [
	{
		id: '123',
		title: 'Course for test',
		description: 'Some short description',
		duration: 120,
		authors: [
			{ id: '1234', name: 'Super Author' },
			{ id: '4321', name: 'Author' },
		],
	},
	{
		id: '124',
		title: 'Course for test 2',
		description: 'Some short description 2',
		duration: 180,
		authors: [
			{ id: '1', name: 'Author' },
			{ id: '2', name: 'Test' },
		],
	},
];

import { useAppSelector } from '../../../store/hooks/hooks';

jest.mock('../../../store/hooks/hooks', () => ({
	useAppSelector: jest.fn(),
	useAppDispatch: jest.fn(),
}));

describe('CourseContainer', () => {
	const useSelectorMock = useAppSelector;
	beforeEach(() => {
		useSelectorMock.mockImplementation(() => {
			return courses;
		});
	});
	afterEach(() => {
		useSelectorMock.mockClear();
	});
	it('shows CourseForm component', () => {
		render(<CourseContainer />);
		fireEvent.click(screen.getAllByRole('button')[1]);
		expect(screen.getByText('Add New Course Form')).toBeInTheDocument();
	});
});
