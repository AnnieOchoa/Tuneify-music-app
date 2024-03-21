const Card = () => {
  return (
    <article className="main-card">
      <div className="main-card__cover">
        <div className="main-card__cover__image">
          <img
            src="https://res.cloudinary.com/dy6gbr4oc/image/upload/v1710946740/tuneify/ab67616d0000b273c3af0c2355c24ed7023cd394_gaxzcn.jpg"
            alt=""
          />
        </div>

        <button className="main-card__cover__playIcon">
          <i className="fa-regular fa-circle-play"></i>
          <div className="main-card__cover__playIcon--bg"></div>
        </button>
      </div>

      <div className="main-card__info">
        <h1>Into you</h1>
        <p>Ariana Grande</p>
        <p>Album Dangerous Woman</p>
      </div>
    </article>
  );
};

export default Card;
