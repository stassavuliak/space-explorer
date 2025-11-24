import "./Header.scss";
import { NavLink } from "react-router-dom"

const Header = () => {
  const setActive = ({ isActive }) => (isActive ? "nav-link active" : "nav-link")

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <NavLink to="/" className="header__logo">
            <b>S</b>pace 
            <br /> 
            <span>E</span>xplorer
          </NavLink>

          <nav className="header__nav">
            <ul>
              <li><NavLink to="/" className={setActive}>Home</NavLink></li>
              <li><NavLink to="/rover" className={setActive}>Rover</NavLink></li>
              <li><NavLink to="/asteroids" className={setActive}>Asteroids</NavLink></li>
            </ul>
          </nav>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
