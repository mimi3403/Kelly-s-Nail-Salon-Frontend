import MenuItems from './MenuItems';
import './NavBar.css';

const NavBar = () => {
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
      </ul>
    </nav>
  )
}

export default NavBar;