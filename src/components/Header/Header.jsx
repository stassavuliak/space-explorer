import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <h1 className="header__logo">
            <b>S</b>pace 
            <br /> 
            <span>E</span>xplorer
          </h1>

          <nav className="header__nav">
            <ul>
              <li><a className="header__link">Home</a></li>
              <li><a className="header__link">Rover</a></li>
              <li><a className="header__link">Asteroids</a></li>
            </ul>
          </nav>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
