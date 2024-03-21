const SongCard = () => {
  return (
    <article className="main-songCard">
      <div className="main-songCard-wrapper container">
        <div className="main-songCard-wrapper__card">
          <div className="main-songCard-wrapper__card__cover">
            <img
              src="https://res.cloudinary.com/dy6gbr4oc/image/upload/v1710948441/tuneify/ab67616d0000b273e5f098d592c28ed04867b918_vcytde.jpg"
              alt="cover"
            />
          </div>

          <div className="main-songCard-wrapper__card__info">
            <h1>Suave</h1>
            <p>Luis Miguel</p>
          </div>
        </div>

        <div className="main-songCard-wrapper__playIcon">
          <button>
            <i className="fa-regular fa-circle-play"></i>
          </button>
        </div>
      </div>
    </article>
  );
};

export default SongCard;
