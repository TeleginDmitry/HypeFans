import { createBrowserRouter } from 'react-router-dom'
import {
	HomePage,
	LoginPage,
	RegisterPage,
	CreationNewObject,
	Settings,
	Profile,
	Edit,
	Messages
} from '../pages/index'
import { Layout } from '../components/layout/layout/Layout'
import { AuthLayout } from '../components/layout/authLayout/AuthLayout'
import PrivateElement from './PrivateElement'
import PrivateAuth from './PrivateAuth'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: '/create',
				element: <CreationNewObject />,
			},
			{
				path: '/settings',
				element: <Settings />,
			},
			{
				path: '/profile',
				element: (
					<PrivateElement>
						<Profile />
					</PrivateElement>
				),
			},
			{
				path: '/edit',
				element: (
					<PrivateElement>
						<Edit />
					</PrivateElement>
				),
			},
			{
				path: '/messages',
				element: (
					// <PrivateElement>
						<Messages />
					// </PrivateElement>
				),
			},
		],
	},
	{
		path: '/',
		element: (
			<PrivateAuth>
				<AuthLayout />
			</PrivateAuth>
		),
		children: [
			{
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '/registration',
				element: <RegisterPage />,
			},
		],
	},
])
