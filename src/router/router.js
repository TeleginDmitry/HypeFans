import {
  SETTINGS_PAGE,
  REGISTER_PAGE,
  MESSAGES_PAGE,
  CREATION_PAGE,
  PROFILE_PAGE,
  LOGIN_PAGE,
  USER_PAGE,
  EDIT_PAGE
} from 'configs/index.config'
import { createBrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'

import {
  Messages,
  Settings,
  Creation,
  Register,
  Profile,
  Login,
  User,
  Edit,
  Home
} from '../pages/index'
import { AuthLayout } from '../components/layout/authLayout/AuthLayout'
import { Layout } from '../components/layout/layout/Layout'
import PrivateRoute from './PrivateRoute'

export const router = createBrowserRouter([
  {
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: `/${CREATION_PAGE}`,
        element: <Creation />
      },
      {
        element: (
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        ),
        path: `/${SETTINGS_PAGE}`
      },
      {
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
        path: `/${PROFILE_PAGE}`
      },
      {
        element: (
          <PrivateRoute>
            <Edit />
          </PrivateRoute>
        ),
        path: `/${EDIT_PAGE}`
      },
      {
        element: (
          <PrivateRoute>
            <Messages />
          </PrivateRoute>
        ),
        path: `/${MESSAGES_PAGE}`
      },
      {
        element: (
          <PrivateRoute>
            <User />
          </PrivateRoute>
        ),
        path: `/${USER_PAGE}/:user_id`
      }
    ],
    element: <Layout />,
    path: '/'
  },
  {
    children: [
      {
        path: `/${LOGIN_PAGE}`,
        element: <Login />
      },
      {
        path: `/${REGISTER_PAGE}`,
        element: <Register />
      }
    ],
    element: (
      <Suspense>
        <PrivateRoute isAuthRoute={true}>
          <AuthLayout />
        </PrivateRoute>
      </Suspense>
    ),
    path: '/'
  }
])
