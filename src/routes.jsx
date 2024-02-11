import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

// Pages
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        Component: React.lazy(() => import('./pages/Dashboard.jsx')),
      },
      {
        path: '/activity',
        Component: React.lazy(() => import('./pages/Activity.jsx')),
      },
      {
        path: '/analytics',
        Component: React.lazy(() => import('./pages/Analytics.jsx')),
      },
      {
        path: '/transactions',
        Component: React.lazy(() => import('./pages/Transactions.jsx')),
      },
      {
        path: '/help',
        Component: React.lazy(() => import('./pages/Help.jsx')),
      },
    ],
  },
])

export default router
