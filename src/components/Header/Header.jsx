import "./Header.scss";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <Link to="/" className="header__logo">
            <b>S</b>pace 
            <br /> 
            <span>E</span>xplorer
          </Link>

          <nav className="header__nav">
            <ul>
              <li><Link to="/" className="header__link">Home</Link></li>
              <li><Link to="/rover" className="header__link">Rover</Link></li>
              <li><Link to="/asteroids" className="header__link">Asteroids</Link></li>
            </ul>
          </nav>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
