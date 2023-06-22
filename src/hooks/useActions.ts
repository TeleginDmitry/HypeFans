import { bindActionCreators } from '@reduxjs/toolkit'
import { rootActions } from 'store/root.actions'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export default useActions
