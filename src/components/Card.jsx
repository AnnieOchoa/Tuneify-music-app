const Card = ({cover, title, artist, album, onClick}) => {
  return (
    <article className="main-card">
      <div className="main-card__cover">
        <div className="main-card__cover__image">
          <img
            src={cover}
            alt="song cover"
          />
        </div>

        <button onClick={onClick} className="main-card__cover__playIcon">
          <i className="fa-regular fa-circle-play"></i>
          <div className="main-card__cover__playIcon--bg"></div>
        </button>
      </div>

      <div className="main-card__info">
        <h1>{title}</h1>
        <p>{artist}</p>
        <p>{album}</p>
      </div>
    </article>
  );
};

export default Card;
