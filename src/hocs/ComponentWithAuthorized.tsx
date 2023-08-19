import { useTypedSelector } from 'hooks/useTypedSelector'

interface IComponentWithAuthorized {
  Component?: React.ReactElement | null
  children: React.ReactElement | null
}

export function ComponentWithAuthorized({
  Component = null,
  children = null
}: IComponentWithAuthorized) {
  const isAuth = useTypedSelector((state) => state.auth.isAuth)

  if (isAuth) return children
  return Component
}
