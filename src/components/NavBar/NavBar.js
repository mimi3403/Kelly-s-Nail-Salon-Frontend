import MenuItems from './MenuItems';
import './NavBar.css';
import { login, logout, } from '../../services/firebase';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <nav className="NavbarItems">
      <ul>
        {MenuItems.map((item, index) => {
          return (

            <li key={index}>
              <Link to={item.url}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </Link>
            </li>
          )
        })}
        {
          props.user ?
            <>
              <li className="nav-links">Welcome, {props.user.displayName}
              </li>

              <li>
                <img
                  style={{ height: '2.5rem', borderRadius: '50%' }}
                  src={props.user.photoURL}
                  alt={props.user.displayName}
                />
              </li>
              <li
                className="nav-links"
                onClick={logout}
              >Logout</li>
            </>
            :
            <li
              className="nav-links"
              onClick={login}
            >Login
          </li>
        }
      </ul>
    </nav >
  )
}

export default NavBar;