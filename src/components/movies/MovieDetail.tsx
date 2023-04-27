import classes from "./MovieDetail.module.css";

import Card from "../ui/Card";

type TMovieDetails = {
  title: string;
  description: string;
  director: string;
  releaseDate: string;
};

export default function MovieDetails({
  title,
  description,
  director,
  releaseDate,
}: TMovieDetails) {
  return (
    <Card>
      <section className={classes.detail}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{director}</p>
        <p>{releaseDate}</p>
      </section>
    </Card>
  );
}
