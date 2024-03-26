import { useEffect, useRef, useState } from 'react';
import HeaderAvatar from './HeaderAvatar';

const Header = ({letter}) => {
  const navigation = useRef(null);
  const [scroll, setScroll] = useState(0);

  const showNavigation = () => {
    navigation.current?.classList.toggle('main-header__hamburger--show');
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <header className="main-header" data-scroll={scroll}>
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
          <button
            className="main-header__hamburger-cta"
            onClick={showNavigation}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <HeaderAvatar letter={letter} />
        </div>
      </div>
    </header>
  );
};

export default Header;
