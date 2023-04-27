import { useRouter } from "next/router";

import MovieDetail from "../../components/movies/MovieDetail";

export default function MovieDetails(props) {
  return (
    <MovieDetail
      id={props.movie.id}
      title={props.movie.title}
      description={props.movie.opening_crawl}
      director={props.movie.director}
      releaseDate={props.movie.release_date}
    />
  );
}

export async function getServerSideProps(context) {
  try {
    const movieId = context.params.movieId;
    const response = await fetch(`https://swapi.dev/api/films/${movieId}/`);
    if (!response.ok) {
      throw new Error("Something went wrong.");
    }
    const data = await response.json();

    return {
      props: {
        context: context.params.movieId,
        movie: data
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '500'
      }
    }
  }
}
