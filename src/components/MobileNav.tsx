import { Link } from 'react-router-dom'

const MobileNav = () => {
    return (
        <section className="mobile-nav">
            <Link to="/">
                <img src="/icons/calendar.svg" alt="" width={30} />
                <span className="text-xs">Home</span>
            </Link>

            <Link to="/weight-gain">
                <img src="/icons/scale.svg" alt="" width={30} />
                <span className="text-xs">Gewichtszunahme</span>
            </Link>
        </section>
    )
}

export default MobileNav
