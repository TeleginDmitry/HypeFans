import useChangingTitlePage from 'hooks/useChangingTitlePage'
import React from 'react'

import HomeComponent from '../components/screens/home/Home'

export default function Home() {
  useChangingTitlePage('Главная')

  return <HomeComponent></HomeComponent>
}
