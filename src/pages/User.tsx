import useChangingTitlePage from 'hooks/useChangingTitlePage'
import UserComponent from 'components/screens/user/User'
import React from 'react'

const User = () => {
  useChangingTitlePage('Профиль')

  return <UserComponent></UserComponent>
}

export default User
