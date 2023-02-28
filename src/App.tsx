import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import { useAppDispatch, useAppSelector } from './store/hooks/hooks';
import { selectUser } from './store/selectors/selectors';
import { fetchAllCourses } from './store/thunks/coursesThunk';
import { fetchAllAuthors } from './store/thunks/authorsThunk';

function App() {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);
	useEffect(() => {
		if (user.isAuth) {
			dispatch(fetchAllCourses());
			dispatch(fetchAllAuthors());
		}
	}, [dispatch, user.isAuth]);
	return <RouterProvider router={router} />;
}

export default App;
