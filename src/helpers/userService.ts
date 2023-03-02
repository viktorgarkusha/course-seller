import { getValue } from '../helpers/localStorageHelper';
import { useAppDispatch } from '../store/hooks/hooks';
import { login } from '../store/slices/userSlice';
import { fetchUserRole } from '../store/thunks/userThunk';
import { UserType } from '../types/user';
import { USER_TOKEN } from '../constants';
import { useEffect } from 'react';

export const useUpdateUserInStore = async () => {
	const dispatch = useAppDispatch();
	const token = JSON.parse(getValue(USER_TOKEN));
	//TODO CHANGE LOGIC DISPATCH users/me
	if (token) {
		console.log('DISPATCH FETCH');
		// const user: UserType = {
		// 	isAuth: true,
		// 	name: userInfo.name,
		// 	email: userInfo.email,
		// 	token: userInfo.token,
		// 	role: '',
		// };
		await dispatch(fetchUserRole());
		console.log('EVENT IS DISPATCHED');
	}
};
