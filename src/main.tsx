import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import WeekDetail from './components/WeekDetail.tsx'
import WeightGain from './components/WeightGain.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/week/:week',
        element: <WeekDetail />,
    },
    {
        path: '/weight-gain',
        element: <WeightGain />,
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
