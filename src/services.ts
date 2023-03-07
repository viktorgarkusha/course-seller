import courseApi from './webClient';
import { TUserRequest } from './components/Registration/Registration';
import { UserType } from './types/user';
import { loginEvent } from './store/slices/userSlice';
import { fetchUserRole } from './store/thunks/userThunk';
import store from './store/store';

const { dispatch } = store;

export const login = (data: TUserRequest) => {
	return courseApi
		.post('/login', JSON.stringify(data))
		.then((response) => {
			const item: UserType = {
				isAuth: true,
				name: response.data.user.name,
				email: response.data.user.email,
				token: response.data.result,
				role: '',
			};
			dispatch(loginEvent(item));
		})
		.then(() => dispatch(fetchUserRole()));
};

export const register = (data: TUserRequest) => {
	return courseApi.post('/register', JSON.stringify(data));
};
