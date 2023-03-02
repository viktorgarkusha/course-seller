import axios from 'axios';

import { USER_TOKEN } from './constants';
import { login } from './store/slices/userSlice';
import { UserType } from './types/user';
import store from './store/store';

import { putValue } from './helpers/localStorageHelper';
import { fetchUserRole } from './store/thunks/userThunk';

const { dispatch } = store;

const courseApi = axios.create({
	baseURL: 'http://localhost:4000/',
	headers: { 'Content-Type': 'application/json' },
});
courseApi.interceptors.response.use(
	function (response) {
		if (response.data.user) {
			putValue(USER_TOKEN, JSON.stringify(response.data.result));
			const item: UserType = {
				isAuth: true,
				name: response.data.user.name,
				email: response.data.user.email,
				token: response.data.result,
				role: '',
			};
			dispatch(login(item));
			dispatch(fetchUserRole());
		}
		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default courseApi;
