import './navbar.styles.scss'

import { Link, Outlet } from "react-router-dom"
import { PokemonsContext } from '../../contexts/pokemons.context'
import { useContext } from 'react'

const Navbar = () => {
    const { typesMenu, setTypesMenu } = useContext(PokemonsContext)

    const handleTypesMenu = () => {
        setTypesMenu(!typesMenu)
    }

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
                        <li>
                            <span onClick={handleTypesMenu} className='show-sidebar'>TYPES</span>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar