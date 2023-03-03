import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import { useAppDispatch, useAppSelector } from './store/hooks/hooks';
import { isUserAuthentificated } from './store/selectors/selectors';
import { fetchAllCourses } from './store/thunks/coursesThunk';
import { fetchAllAuthors } from './store/thunks/authorsThunk';

function App() {
	const dispatch = useAppDispatch();
	const isAuth = useAppSelector(isUserAuthentificated);
	console.log('IN APP');
	useEffect(() => {
		if (isAuth) {
			console.log('IN APP EFFWCT');
			dispatch(fetchAllCourses());
			dispatch(fetchAllAuthors());
		}
	}, [dispatch, isAuth]);
	return <RouterProvider router={router} />;
}

export default App;
