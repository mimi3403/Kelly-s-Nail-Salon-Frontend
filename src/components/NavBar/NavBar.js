import MenuItems from './MenuItems';
import './NavBar.css';
import { login, logout, } from '../../services/firebase';

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
        {/* <li>Welcome, </li> */}
        <li
          className="nav-links"
          onClick={login}
        >Login</li>
        <li
          className="nav-links"
          onClick={logout}
        >Logout</li>
      </ul>
    </nav>
  )
}

export default NavBar;