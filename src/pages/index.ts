import { lazy } from 'react'
import HomePage from './HomePage'
import CreationNewObject from './CreationNewObject'
import Settings from './Settings'
import Profile from './Profile'
import Edit from './Edit'
import Messages from './Messages'
import User from './User'
const LoginPage = lazy(() => import('./LoginPage'))
const RegisterPage = lazy(() => import('./RegisterPage'))

export {
	HomePage,
	LoginPage,
	RegisterPage,
	CreationNewObject,
	Settings,
	Profile,
	Edit,
	Messages,
	User,
}
