import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {
	HomePage,
	LoginPage,
	RegisterPage,
	CreationNewObject,
	Settings,
	Profile,
	Edit,
	Messages,
	User,
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
				element: (
					<PrivateElement>
						<CreationNewObject />,
					</PrivateElement>
				),
			},
			{
				path: '/settings',
				element: (
					<PrivateElement>
						<Settings />
					</PrivateElement>
				),
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
					<PrivateElement>
						<Messages />
					</PrivateElement>
				),
			},
			{
				path: '/user/:user_id',
				element: (
					<PrivateElement>
						<User />
					</PrivateElement>
				),
			},
			{
				path: '/story/:story_id',
				index: true,
			},
		],
	},
	{
		path: '/',
		element: (
			<Suspense>
				<PrivateAuth>
					<AuthLayout />
				</PrivateAuth>
			</Suspense>
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
