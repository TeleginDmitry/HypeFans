import useChangingTitlePage from 'hooks/useChangingTitlePage'
import EditComponent from '@components/screens/edit/Edit'
import React from 'react'

const Edit = () => {
  useChangingTitlePage('Изменить')

  return <EditComponent></EditComponent>
}

export default Edit
