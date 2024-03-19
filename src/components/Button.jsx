import { Link } from "react-router-dom";

const Button = ({ path, type = 'button', name, onClick, style = 'filled-btn' }) => {
  if(type === 'navigation'){
    return (
      <Link className={style} to={path}>{name}</Link>
    )
  }
  return (
    <button className={style} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
