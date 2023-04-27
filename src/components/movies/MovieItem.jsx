import { useRouter } from "next/router";
import Link from "next/link";
import Card from "../ui/Card";
import classes from "./MovieItem.module.css";

export default function MovieItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push(`/${props.id}`);
  }

  return (
    // <li onClick={showDetailsHandler} className={classes.item}>
    <li className={classes.item}>
      <Link href={`/${props.id}`}>
        <Card>
          <div className={classes.content}>
            <h2>{props.title}</h2>
          </div>
        </Card>
      </Link>
    </li>
  );
}
