import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Trimester from './components/Trimester.tsx'
import App from './App.tsx'
import './index.css'

const WeekDetail = React.lazy(() => import('./components/WeekDetail'))
const Overview = React.lazy(() => import('./components/Overview'))
const Names = React.lazy(() => import('./components/Names'))
const WeightGain = React.lazy(() => import('./components/WeightGain'))

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Trimester />,
            },
            {
                path: '/week/:week',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <WeekDetail />
                    </React.Suspense>
                ),
            },
            {
                path: '/overview',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <Overview />
                    </React.Suspense>
                ),
            },
            {
                path: '/names',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <Names />
                    </React.Suspense>
                ),
            },
            {
                path: '/weight-gain',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <WeightGain />
                    </React.Suspense>
                ),
            },
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
