import { Link } from 'react-router-dom'

const MobileNav = () => {
    return (
        <section className="mobile-nav">
            <Link to="/">
                <img src="/icons/calculator.svg" alt="" width={30} />
                <span className="text-xs">Zyklus</span>
            </Link>

            <Link to="/overview">
                <img src="/icons/home.svg" alt="" width={30} />
                <span className="text-xs">Übersicht</span>
            </Link>

            <Link to="/names">
                <img src="/icons/names.svg" alt="" width={30} />
                <span className="text-xs">Namen</span>
            </Link>

            <Link to="/weight-gain">
                <img src="/icons/weight.svg" alt="" width={30} />
                <span className="text-xs">Gewicht</span>
            </Link>
        </section>
    )
}

export default MobileNav
