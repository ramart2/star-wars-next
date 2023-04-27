import MovieItem from "./MovieItem";
import classes from "./MovieList.module.css";

export default function MovieList(props) {
  return (
    <ul className={classes.list}>
      {props.movies.map((movie) => (
        <MovieItem 
          key={movie.id}
          id={movie.id}
          title={movie.title}
        />
      ))}
    </ul>
  );
}
