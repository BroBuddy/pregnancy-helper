import { Outlet, useLocation } from 'react-router-dom'
import MobileNav from './components/MobileNav'
import { useLayoutEffect } from 'react'
import './App.css'

function App() {
    const location = useLocation()

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [location.pathname])

    return (
        <>
            <Outlet />
            <MobileNav />
        </>
    )
}

export default App
