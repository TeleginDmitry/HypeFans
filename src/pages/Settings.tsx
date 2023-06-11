import React from 'react'
import SettingsComponent from '@components/screens/settings/Settings'
import useChangingTitlePage from 'hooks/useChangingTitlePage'

const Settings = () => {

  useChangingTitlePage('Настройки')

  return (
    <SettingsComponent></SettingsComponent>
  )
}

export default Settings