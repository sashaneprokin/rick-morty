import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className='movie-card'>
      <div className='overlay'></div>

      <h2>{movie.name}</h2>
      <h3>{movie.air_date}</h3>
      <h4>{movie.episode}</h4>

      <MovieControls type={type} movie={movie} />
    </div>
  );
};
