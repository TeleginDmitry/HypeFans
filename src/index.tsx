import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import HeadProvider from './providers/HeadProvider'
import { router } from './router/router'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<HeadProvider>
			<RouterProvider router={router} />
		</HeadProvider>
		
	</Provider>
)
