import styles from '@/styles/Home.module.css'

import MovieList from '../components/movies/MovieList';

export default function Home(props: any) {

  for (const movie of props.movies.results) {
    movie.id = convertEpisodeIds(movie.episode_id);
  }

  return (
    <section>
      <MovieList movies={props.movies.results} />
    </section>
  )
}

function convertEpisodeIds(episodeId: number) {
  const episodeMap = new Map([
      [4,1],
      [5,2],
      [6,3],
      [1,4],
      [2,5],
      [3,6],
  ]);

  return episodeMap.get(episodeId);
}

export async function getServerSideProps() {
  try {
    const response = await fetch("https://swapi.dev/api/films/");
        if (!response.ok) {
          throw new Error("Something went wrong.");
        }

        const data = await response.json();

        return {
          props: {
            movies: data
          }
        };
  } catch (error) {
    return error;
  }
}
