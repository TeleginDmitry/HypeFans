import React from 'react'
import CreationComponent from '@components/screens/creation/Creation'
import useChangingTitlePage from 'hooks/useChangingTitlePage'

const Creation = () => {

  useChangingTitlePage('Создать')


  return (
   <CreationComponent></CreationComponent>
  )
}

export default Creation