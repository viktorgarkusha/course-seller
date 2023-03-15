import * as reactRedux from 'react-redux';
import { render, screen } from '../../../testUtils';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../../store/hooks/hooks';

import Header from '../Header';

jest.mock('../../../store/hooks/hooks', () => ({
	useAppSelector: jest.fn(),
	useAppDispatch: jest.fn(),
}));

describe('Header', () => {
	const useSelectorMock = useAppSelector;
	beforeEach(() => {
		useSelectorMock.mockImplementation(() => {
			return { name: 'Test User', isAuth: true };
		});
	});
	afterEach(() => {
		useSelectorMock.mockClear();
	});
	it('renders Header component', () => {
		render(<Header />);
		expect(screen.getByText('Test User')).toBeInTheDocument();
		expect(screen.getByAltText('logo')).toBeInTheDocument();
	});
});
