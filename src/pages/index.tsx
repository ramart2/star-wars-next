import { TMovie } from "@/types/TMovie";
import { TResponse } from "@/types/TResponse";
import MovieList from "../components/movies/MovieList";
import { GetServerSideProps } from "next";
import request from "../utils/request";

type THomeProps = {
  movies: TMovie[];
};

function convertEpisodeIds(episodeId: number) {
  const episodeMap = new Map([
    [4, 1],
    [5, 2],
    [6, 3],
    [1, 4],
    [2, 5],
    [3, 6],
  ]);

  return episodeMap.get(episodeId);
}

export default function Home({movies}: THomeProps) {
  for (const movie of movies) {
    movie.id = convertEpisodeIds(movie.episode_id);
  } 

  return <MovieList movies={movies} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await request<TResponse<TMovie>>(
      "https://swapi.dev/api/films/"
    );

    const movies = response.results.map((movie) => ({
      ...movie,
      id: convertEpisodeIds(movie.episode_id),
    }));

    return {
      props: {
        movies: movies,
      },
    };
  } catch (error) {
    return error;
  }
};
