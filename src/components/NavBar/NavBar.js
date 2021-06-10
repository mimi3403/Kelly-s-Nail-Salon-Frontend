import MenuItems from './MenuItems';
import { login, logout } from '../../services/firebase';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="NavbarItems">
      <ul>
        {MenuItems.map((item, index) => {
          return (

            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
        <li>Welcome, User</li>
        <li>IMG</li>
        <li
          className="nav-links"
          onClick={logout}
        >Logout</li>
        <li
          className="nav-links"
          onClick={login}
        >Login</li>
      </ul>
    </nav>
  )
}

export default NavBar;