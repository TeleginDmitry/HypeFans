import React from 'react'

import { AuthProvider } from './AuthProvider'

interface HeadProviderProps {
  children: React.ReactNode
}

const HeadProvider = ({ children }: HeadProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>
}

export default HeadProvider
