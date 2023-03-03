import { getValue } from '../helpers/localStorageHelper';
import { useAppDispatch } from '../store/hooks/hooks';
import { fetchUserRole } from '../store/thunks/userThunk';
import { USER_TOKEN } from '../constants';

export const useUpdateUserInStore = async () => {
	const dispatch = useAppDispatch();
	const token = JSON.parse(getValue(USER_TOKEN));
	if (token) {
		await dispatch(fetchUserRole({}));
	}
};
