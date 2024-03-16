const Header = () => {
  return (
    <header className="main-header">
      <div className="main-header__navbar container">
        <div className="main-header__navbar-nav">
          <div className="main-header__navbar-nav__logo">
            <img
              src="https://res.cloudinary.com/dy6gbr4oc/image/upload/v1710559292/tuneify/logo-no-background_ffvbdp.png"
              alt="Logo"
            />
          </div>

          <nav className="main-header__navbar-nav__nav">
            <a href="#">Populares</a>
            <a href="#">Novedades </a>
            <a href="#">Generos</a>
          </nav>
        </div>

        <div className="main-header__navbar-searchprofile">
          <p className="main-header__navbar-searchprofile__search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </p>

          <div className="main-header__navbar-searchprofile__avatar">
                <p>D</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
