import classes from './MovieDetail.module.css';

import Card from '../ui/Card';

export default function MovieDetails(props) {
  return (
    <Card>
      <section className={classes.detail}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>{props.director}</p>
        <p>{props.releaseDate}</p>
      </section>
    </Card>
  );
}
