import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {
	Home,
	Login,
	Register,
	Creation,
	Settings,
	Profile,
	Edit,
	Messages,
	User,
} from '../pages/index'
import { Layout } from '../components/layout/layout/Layout'
import { AuthLayout } from '../components/layout/authLayout/AuthLayout'
import PrivateRoute  from './PrivateRoute'
import {
	CREATION_PAGE,
	EDIT_PAGE,
	LOGIN_PAGE,
	MESSAGES_PAGE,
	PROFILE_PAGE,
	REGISTER_PAGE,
	SETTINGS_PAGE,
	USER_PAGE,
} from 'configs/index.config'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: `/${CREATION_PAGE}`,
				element: (
					<Creation />
				),
			},
			{
				path: `/${SETTINGS_PAGE}`,
				element: (
					<PrivateRoute>
						<Settings />
					</PrivateRoute>
				),
			},
			{
				path: `/${PROFILE_PAGE}`,
				element: (
					<PrivateRoute>
						<Profile />
					</PrivateRoute>
				),
			},
			{
				path: `/${EDIT_PAGE}`,
				element: (
					<PrivateRoute>
						<Edit />
					</PrivateRoute>
				),
			},
			{
				path: `/${MESSAGES_PAGE}`,
				element: (
					<PrivateRoute>
						<Messages />
					</PrivateRoute>
				),
			},
			{
				path: `/${USER_PAGE}/:user_id`,
				element: (
					<PrivateRoute>
						<User />
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: '/',
		element: (
			<Suspense>
				<PrivateRoute isAuthRoute={true}>
					<AuthLayout />
				</PrivateRoute >
			</Suspense>
		),
		children: [
			{
				path: `/${LOGIN_PAGE}`,
				element: <Login />,
			},
			{
				path: `/${REGISTER_PAGE}`,
				element: <Register />,
			},
		],
	},
])
