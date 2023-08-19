import { useTypedSelector } from 'hooks/useTypedSelector'
import React from 'react'

interface IComponentWithEqualUser {
  children: React.ReactElement
  user: number
}

const ComponentWithEqualUser = ({
  children,
  user
}: IComponentWithEqualUser) => {
  const myUserId = useTypedSelector((state) => state.auth.user?.id)

  if (!user) return null

  if (user === myUserId) return children

  return null
}

export default ComponentWithEqualUser
