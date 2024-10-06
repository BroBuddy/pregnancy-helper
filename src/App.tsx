import { Outlet } from 'react-router-dom'
import MobileNav from './components/MobileNav'
import './App.css'

function App() {
    return (
        <>
            <Outlet />
            <MobileNav />
        </>
    )
}

export default App
