import './navbar.styles.scss'

import { Link, Outlet } from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <nav className='navbar-container'>
            <div className="logo">
                <Link to='/' className='nav-link'>
                    <h1>REACT <span>POKEDEX</span></h1>
                </Link>
            </div>
            <div className='nav-menu'>
                <ul>
                    <li>
                        <Link to='/' className='nav-link'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/search' className='nav-link'>SEARCH</Link>
                    </li>
                    <li>
                        <Link to='/random' className='nav-link'>RANDOM</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Outlet />
    </>
  )
}

export default Navbar