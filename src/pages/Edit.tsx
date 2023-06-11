import React from 'react'
import EditComponent from '@components/screens/edit/Edit'
import useChangingTitlePage from 'hooks/useChangingTitlePage'

const Edit = () => {
	useChangingTitlePage('Изменить')

	return <EditComponent></EditComponent>
}

export default Edit
