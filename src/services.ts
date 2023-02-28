import courseApi from './webClient';
import { TUserRequest } from './components/Registration/Registration';

export const login = (data: TUserRequest) => {
	return courseApi.post('/login', JSON.stringify(data));
};

export const register = (data: TUserRequest) => {
	return courseApi.post('/register', JSON.stringify(data));
};
