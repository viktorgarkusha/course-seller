import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from 'src/store/hooks/hooks';
import { selectUserRole } from 'src/store/selectors/selectors';
import { useUpdateUserInStore } from '../../helpers/userService';

export type TProtectedRoute = {
	redirectUrl?: string;
};

const AdminRoute = ({ redirectUrl = '/courses' }: TProtectedRoute) => {
	const role = useAppSelector(selectUserRole);
	useUpdateUserInStore();
	if (role === 'admin') {
		return <Outlet />;
	}
	return <Navigate to={redirectUrl} replace />;
};

export default React.memo(AdminRoute);
