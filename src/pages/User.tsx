import React from 'react'
import UserComponent from 'components/screens/user/User'
import useChangingTitlePage from 'hooks/useChangingTitlePage'

const User = () => {

  useChangingTitlePage('Профиль')

  return <UserComponent></UserComponent>
}

export default User