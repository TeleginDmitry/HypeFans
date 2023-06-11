import { lazy } from 'react'
import Home from './Home'
import Creation from './Creation'
import Settings from './Settings'
import Profile from './Profile'
import Edit from './Edit'
import Messages from './Messages'
import User from './User'
const Login = lazy(() => import('./Login'))
const Register = lazy(() => import('./Register'))

export {
	Home,
	Login,
	Register,
	Creation,
	Settings,
	Profile,
	Edit,
	Messages,
	User,
}
