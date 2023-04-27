import Link from "next/link";
import Card from "../ui/Card";
import classes from "./MovieItem.module.css";

type TMovieItem = {
  id: number;
  title: string;
};

export default function MovieItem({ id, title }: TMovieItem) {
  return (
    <li className={classes.item}>
      <Link href={`/${id}`}>
        <Card>
          <div className={classes.content}>
            <h2>{title}</h2>
          </div>
        </Card>
      </Link>
    </li>
  );
}
