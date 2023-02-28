import {
	Route,
	Navigate,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';

import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Layout from './common/Layout/Layout';
import CourseContainer from './components/CourseContainer/CourseContainer';
import ProtectedRoute from './common/ProtectedRoute/ProtectedRoute';
import CourseForm from './components/CourseForm/CourseForm';
import CourseInfo from './components/CourseInfo/CourseInfo';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route index element={<Login />} />
			<Route path='login' element={<Navigate to='/' replace />} />
			<Route path='registration' element={<Registration />} />
			<Route element={<ProtectedRoute />}>
				<Route path='courses' element={<CourseContainer />} />
				<Route path='courses/add' element={<CourseForm />} />
				<Route path='courses/:courseId' element={<CourseInfo />} />
			</Route>
		</Route>
	)
);

export default router;
