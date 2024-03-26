import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HeaderAvatar = ({letter}) => {
  const nav = useRef(null);
  const avatar = useRef(null);
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        nav.current?.classList.remove('header-avatar__dropdown-show');
      }
    });
  }, []);

  const showDropdown = () => {
    nav.current?.classList.toggle('header-avatar__dropdown-show');
  };
  return (
    <div className="header-avatar">
      <button
        ref={avatar}
        className="header-avatar__cta"
        onClick={showDropdown}
      >
        <p>{letter}</p>
      </button>
      <nav ref={nav} className="header-avatar__dropdown">
        <Link to="/logout">Cerrar Sesión</Link>
      </nav>
    </div>
  );
};

export default HeaderAvatar;
