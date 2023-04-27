import MovieItem from "./MovieItem";
import classes from "./MovieList.module.css";
import { TMovie } from "@/types/TMovie";

type TMovieListProps = {
  movies: TMovie[];
};

export default function MovieList({ movies }: TMovieListProps) {
  return (
    <ul className={classes.list}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} id={movie.id} title={movie.title} />
      ))}
    </ul>
  );
}
