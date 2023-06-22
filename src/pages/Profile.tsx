import ProfileComponent from '@components/screens/profile/Profile'
import useChangingTitlePage from 'hooks/useChangingTitlePage'
import React from 'react'

const Profile = () => {
  useChangingTitlePage('Профиль')

  return <ProfileComponent></ProfileComponent>
}

export default Profile
