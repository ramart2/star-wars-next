import classes from "./Card.module.css";

type TCardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: TCardProps) {
  return <div className={classes.card}>{children}</div>;
}
