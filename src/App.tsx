import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import { putValue } from './helpers/localStorageHelper';
import { courses } from './constants';

function App() {
	putValue('courses', JSON.stringify(courses));
	return <RouterProvider router={router} />;
}

export default App;
