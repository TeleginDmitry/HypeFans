import SettingsComponent from '@components/screens/settings/Settings'
import useChangingTitlePage from 'hooks/useChangingTitlePage'
import React from 'react'

const Settings = () => {
  useChangingTitlePage('Настройки')

  return <SettingsComponent></SettingsComponent>
}

export default Settings
