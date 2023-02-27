import { getValue } from '../helpers/localStorageHelper';
import { useAppDispatch } from '../store/hooks/hooks';
import { login } from '../store/slices/userSlice';
import { UserType } from '../types/user';
import { USER_INFO_KEY } from '../constants';

export const updateUserInStore = () => {
	const dispatch = useAppDispatch();
	const userInfo = JSON.parse(getValue(USER_INFO_KEY));
	if (userInfo) {
		const item: UserType = {
			isAuth: true,
			name: userInfo.name,
			email: userInfo.email,
			token: userInfo.token,
		};
		dispatch(login(item));
	}
};
