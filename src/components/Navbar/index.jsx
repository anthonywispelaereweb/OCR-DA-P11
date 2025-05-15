import myRoutes from './../../routing'
import { NavLink } from 'react-router'
import Logo from './../../assets/logo.svg'
import './Navbar.scss'

const NavBar = () => {
  const filteredRoutes = myRoutes.filter(route => route?.label && route?.path);
  return (
    <header className="container-flex nav">
      <NavLink to={'/'}>
        <img src={Logo} alt="KASA" className="nav-logo" />
      </NavLink>
      <div className="nav-menu">
        <ul className="nav-menu-list">
          {filteredRoutes.map((route, index) => (
            <li key={index} className="nav-menu-list-item">
              <NavLink to={route.path}>
                {route.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default NavBar
