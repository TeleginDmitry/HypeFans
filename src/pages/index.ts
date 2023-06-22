import { lazy } from 'react'

import Settings from './Settings'
import Creation from './Creation'
import Messages from './Messages'
import Profile from './Profile'
import User from './User'
import Edit from './Edit'
import Home from './Home'
const Login = lazy(() => import('./Login'))
const Register = lazy(() => import('./Register'))

export {
  Messages,
  Settings,
  Creation,
  Register,
  Profile,
  Login,
  User,
  Edit,
  Home
}
