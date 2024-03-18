const Button = ({ name, onClick, style = 'filled-btn' }) => {
  return (
    <button className={style} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
