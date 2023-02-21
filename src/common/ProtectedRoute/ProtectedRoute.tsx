import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { getValue } from '../../helpers/localStorageHelper';
import { USER_INFO_KEY } from '../../constants';

export type TProtectedRoute = {
	redirectUrl?: string;
};

const ProtectedRoute = ({ redirectUrl = '/login' }: TProtectedRoute) => {
	const isLoggedIn = getValue(USER_INFO_KEY);
	if (!isLoggedIn) {
		return <Navigate to={redirectUrl} replace />;
	}
	return <Outlet />;
};

export default React.memo(ProtectedRoute);
