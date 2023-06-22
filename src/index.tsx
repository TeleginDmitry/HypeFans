import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import React from 'react'

import HeadProvider from './providers/HeadProvider'
import './assets/styles/_mixins.module.scss'
import { router } from './router/router'
import store from './store'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus: false,
      // refetchInterval: 5 * 60 * 1000
      networkMode: 'offlineFirst'
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <HeadProvider>
        <RouterProvider router={router} />
      </HeadProvider>
    </Provider>
    <ReactQueryDevtools />
  </QueryClientProvider>
)
