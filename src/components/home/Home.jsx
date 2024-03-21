import { useEffect } from 'react';
import Card from '../Card';
import Header from '../Header';
import SongCard from '../SongCard';

const Home = () => {
  useEffect(() => {
    document.querySelector('body').style.backgroundColor = '#191919';
  }, []);
  return (
    <>
      <Header />

      <main className="main-home">
        <div className="main-home-page container">
          <div className="main-home-page__title">
            <h1>Novedades</h1>
            <p>
              Nueva <span>Musica</span>{' '}
            </p>
          </div>

          <div className="main-home-page__cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div className="main-home-page__songcards">
            <div className="main-home-page__songcards__title">
              <h2>
                Musica <span>+ TOP</span>{' '}
              </h2>
              <p>¡Las mas escuchado! </p>
            </div>

            <div className="main-home-page__songcards__cards">
              <SongCard />
              <SongCard />
              <SongCard />
              <SongCard />
              <SongCard />
              <SongCard />
            </div>
          </div>
        </div>

        <div className="main-home__player">
          <div className="main-home__player--wrapper container">
            <button className="main-home__player--wrapper--close">
              <i className="fa-solid fa-circle-xmark"></i>
            </button>
            <div className="main-home__player--wrapper-cover">
              <img
                src="https://res.cloudinary.com/dy6gbr4oc/image/upload/v1710962334/tuneify/DuaLipa_FutureNostalgiaCD_go8gms.webp"
                alt="cover"
              />
              <div className="main-home__player--wrapper-cover__body">
                <h3>Levitating</h3>
                <p>Dua Lipa</p>
              </div>
            </div>
            <div className="main-home__player--wrapper-progress">
              <div className="main-home__player--wrapper-progress-bar">
                <input type="range" />
              </div>
              <button>
                <i className="fa-solid fa-pause"></i> 
              </button>
              <button>
                <i className="fa-solid fa-volume-low"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
