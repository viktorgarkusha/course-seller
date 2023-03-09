import axios from 'axios';

import { USER_TOKEN } from './constants';

import { getValue, putValue } from './helpers/localStorageHelper';

const courseApi = axios.create({
	baseURL: 'http://localhost:4000/',
	headers: { 'Content-Type': 'application/json' },
});
courseApi.interceptors.response.use(
	function (response) {
		if (response.data.user) {
			putValue(USER_TOKEN, JSON.stringify(response.data.result));
		}
		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);
courseApi.interceptors.request.use(function (config) {
	config.headers.Authorization = JSON.parse(getValue(USER_TOKEN));
	return config;
});

export default courseApi;
