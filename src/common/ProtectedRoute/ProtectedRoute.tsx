import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import localStorage from '../../helpers/localStorageHelper';

export type TProtectedRoute = {
	redirectUrl?: string;
};

const ProtectedRoute = ({ redirectUrl = '/login' }: TProtectedRoute) => {
	const isLoggedIn = localStorage('userInfo');
	if (!isLoggedIn) {
		return <Navigate to={redirectUrl} replace />;
	}
	return <Outlet />;
};

export default React.memo(ProtectedRoute);
