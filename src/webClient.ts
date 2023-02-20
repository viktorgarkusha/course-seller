import axios from 'axios';

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
		if (response.data.result) {
			const item: TServerAuth = {
				accessToken: response.data.result,
				name: response.data.user.name,
				email: response.data.user.email,
			};
			localStorage.setItem('userInfo', JSON.stringify(item));
		}
		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default courseApi;
