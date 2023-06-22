import CreationComponent from '@components/screens/creation/Creation'
import useChangingTitlePage from 'hooks/useChangingTitlePage'
import React from 'react'

const Creation = () => {
  useChangingTitlePage('Создать')

  return <CreationComponent></CreationComponent>
}

export default Creation
