import axios from 'axios';

import { USER_INFO_KEY } from './constants';

type TServerAuth = {
	accessToken: string;
	name: string;
	email: string;
};

const courseApi = axios.create({
	baseURL: 'http://localhost:4000/',
	headers: { 'Content-Type': 'application/json' },
	method: 'post',
});
courseApi.interceptors.response.use(
	function (response) {
		if (response.data.user) {
			const item: TServerAuth = {
				accessToken: response.data.result,
				name: response.data.user.name,
				email: response.data.user.email,
			};
			localStorage.setItem(USER_INFO_KEY, JSON.stringify(item));
		}
		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default courseApi;
