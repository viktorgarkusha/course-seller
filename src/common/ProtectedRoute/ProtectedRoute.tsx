import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from 'src/store/hooks/hooks';
import { selectUser } from 'src/store/selectors/selectors';
import { useUpdateUserInStore } from '../../helpers/userService';

export type TProtectedRoute = {
	redirectUrl?: string;
};

const ProtectedRoute = ({ redirectUrl = '/login' }: TProtectedRoute) => {
	const user = useAppSelector(selectUser);
	useUpdateUserInStore();
	if (!user.isAuth) {
		return <Navigate to={redirectUrl} replace />;
	}
	return <Outlet />;
};

export default React.memo(ProtectedRoute);
