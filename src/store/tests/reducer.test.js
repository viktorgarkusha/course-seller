import reducer from '../slices/courseSlice';
import { addCourse } from '../thunks/coursesThunk';
import configureStore from 'redux-mock-store';
import axios from 'axios';

import ReduxThunk from 'redux-thunk';

jest.mock('axios', () => {
	return {
		create: jest.fn(() => ({
			post: jest.fn().mockReturnValue({
				data: {
					title: 'Test title',
					description: 'Test description',
					duration: 120,
					authors: [],
					creationDate: new Date().toDateString(),
				},
				status: 201,
			}),
			interceptors: {
				request: { use: jest.fn(), eject: jest.fn() },
				response: { use: jest.fn(), eject: jest.fn() },
			},
		})),
	};
});
const mockedAxios = axios;

//jest.mock('axios');
describe('CourseResucer', () => {
	const innitialState = { courses: [] };
	it('returns course innitial state', () => {
		expect(reducer(undefined, {})).toStrictEqual(innitialState);
	});

	it('returns course innitial state', () => {
		// axios.post = jest.fn().mockResolvedValue({
		// 	data: {
		// 		title: 'Test title',
		// 		description: 'Test description',
		// 		duration: 120,
		// 		authors: [],
		// 		creationDate: new Date().toDateString(),
		// 	},
		// 	status: 201,
		// });

		axios.interceptors = jest.fn();
		const middlewares = [ReduxThunk];
		const mockStore = configureStore(middlewares);
		const store = mockStore({});

		return store
			.dispatch(
				addCourse({
					title: 'Test title',
					description: 'Test description',
					duration: 120,
					authors: [],
					creationDate: new Date().toDateString(),
				})
			)
			.then(() => {
				console.log(store.getActions());
			});

		// console.log(store.getActions());
		// console.log(store.getState());
	});
});
