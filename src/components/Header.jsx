import { useRef } from 'react';
import HeaderAvatar from './HeaderAvatar';

const Header = () => {
  const navigation = useRef(null)

  const showNavigation = () => {
    navigation.current?.classList.toggle('main-header__hamburger--show')
    console.log(navigation.current)
  }

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

          <nav ref={navigation} className="main-header__navbar-nav__nav">
            <a href="#">Populares</a>
            <a href="#">Novedades </a>
            <a href="#">Generos</a>
          </nav>
        </div>

        <div className="main-header__hamburger">
         <button className='main-header__hamburger-cta' onClick={showNavigation}>
          <i className="fa-solid fa-bars"></i>
          </button>

          <HeaderAvatar />
        </div>
      </div>
    </header>
  );
};

export default Header;
