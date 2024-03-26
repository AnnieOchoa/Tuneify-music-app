import { useEffect, useState } from 'react';
import Card from '../Card';
import Header from '../Header';
import { useNavigate } from 'react-router';
import Player from '../Player';
import { getLetter } from '../../helpers/getLetter';

const Home = () => {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  const [playingSong, setPlayingSong] = useState(null);
  const [letter, setLetter] = useState('H');
  const [query, setQuery] = useState('');
  const url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=tracks&offset=0&limit=18&numberOfTopResults=5`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cd4f1b748fmsh4bef55854802c4ep1f93a9jsnf0254dfd3254',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
    },
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#191919';
    document.body.style.marginTop = '130px';
    document.body.style.marginBottom = '130px';
  }, []);

  useEffect(() => {
    const userData = window.localStorage.getItem('userData');
    if (!userData) {
      return navigate('/auth/login');
    }
    const { email } = JSON.parse(userData);
    setLetter(email);
  }, []);

  const fetchSongs = async () => {
    const response = await fetch(url, options);
    const {
      tracks: { items },
    } = await response.json();
    setSongs(items);
  };

  return (
    <>
      <Header letter={getLetter(letter)} />

      <main className="main-home">
        <div className="main-home-page container">
          <div className="main-home-page__title">
            <div className="main-home-page__title--heading">
              <h1>Novedades</h1>
              <p>
                Nueva <span>Musica</span>{' '}
              </p>
            </div>
            <div className="main-home-page__title--search">
              <label>Buscar</label>
              <div>
                <input
                  onKeyDown={(e) => {
                    e.key === 'Enter' && fetchSongs()
                  }}
                  placeholder=''
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="search"
                />
                <button onClick={fetchSongs}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="main-home-page__cards">
            {songs.length ? (
              songs?.map(({ data }) => {
                const cover = data.albumOfTrack.coverArt.sources[0].url;
                const title = data.name;
                const album = data.albumOfTrack.name;
                const artist = data.artists.items[0].profile.name;
                const id = data.id;
                return (
                  <Card
                    album={album}
                    artist={artist}
                    title={title}
                    cover={cover}
                    key={id}
                    onClick={() => {
                      setPlayingSong(`https://open.spotify.com/track/${id}`);
                    }}
                  />
                );
              })
            ) : (
              <p style={{ color: '#fff' }}>
                No hay canciones. Busca una para comenzar
              </p>
            )}
          </div>
        </div>
        {playingSong && <Player song={playingSong} />}
      </main>
    </>
  );
};

export default Home;
