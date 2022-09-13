import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'components/helpers/getMovies';

export const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getCast(movieId).then(res => setCasts(res));
  }, [movieId]);

  if (!casts) {
    return;
  }

  return (
    <div>
      <ul>
        {casts.map(cast => {
          return (
            <li key={cast.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt="Film"
                width="200px"
              />
              <p>{cast.original_name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
