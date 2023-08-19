import { useTypedSelector } from 'hooks/useTypedSelector'
import React from 'react'

interface IComponentWithNotEqualUser {
  children: React.ReactElement
  user: number
}

const ComponentWithNotEqualUser = ({
  children,
  user
}: IComponentWithNotEqualUser) => {
  const myUserId = useTypedSelector((state) => state.auth.user?.id)

  if (!user) return null

  if (user !== myUserId) return children

  return null
}

export default ComponentWithNotEqualUser
