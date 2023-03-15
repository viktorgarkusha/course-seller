import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import CourseForm from './components/CourseForm/CourseForm';

const AllTheProviders = ({ children }: { children: React.ReactElement }) => {
	return (
		<Provider store={store}>
			<RouterProvider
				router={createBrowserRouter(
					createRoutesFromElements(
						<Route>
							<Route index element={children}></Route>
							<Route path='/add' element={<CourseForm />} />
						</Route>
					)
				)}
			/>
		</Provider>
	);
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
