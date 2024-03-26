import { Spotify } from 'react-spotify-embed';

const Player = ({song, ref}) => {
  return (
    <div ref={ref} className="embedded-player">
      <Spotify wide link={song} />
    </div>
  )
}

export default Player