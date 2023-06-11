import React from 'react'
import HomeComponent from '../components/screens/home/Home'
import useChangingTitlePage from 'hooks/useChangingTitlePage'

export default function Home() {

  useChangingTitlePage('Главная')


  return (
   <HomeComponent></HomeComponent>
  )
}
