import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import MovieDetail from "../../components/movies/MovieDetail";
import { TMovie } from "@/types/TMovie";
import request from "@/utils/request";

type TMovieProps = {
  movie: TMovie
}

export default function MovieDetails({ movie }: TMovieProps) {
  return (
    <MovieDetail
      title={movie.title}
      description={movie.opening_crawl}
      director={movie.director}
      releaseDate={movie.release_date}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const movieId = context.params?.movieId;
    const movie = await request<TMovie>(`https://swapi.dev/api/films/${movieId}/`);

    return {
      props: {
        movie: movie
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
