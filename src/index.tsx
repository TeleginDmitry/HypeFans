import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import HeadProvider from './providers/HeadProvider'
import { router } from './router/router'
import store from './store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './assets/styles/_mixins.module.scss'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// refetchOnWindowFocus: false,
			// refetchInterval: 5 * 60 * 1000
			networkMode: 'offlineFirst',
		},
	},
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
