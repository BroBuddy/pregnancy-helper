import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WeekDetail from './components/WeekDetail.tsx'
import WeightGain from './components/WeightGain.tsx'
import TrimesterOverview from './components/TrimesterOverview.tsx'
import App from './App.tsx'
import './index.css'

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <TrimesterOverview />,
            },
            {
                path: '/week/:week',
                element: <WeekDetail />,
            },
            {
                path: '/weight-gain',
                element: <WeightGain />,
            },
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
