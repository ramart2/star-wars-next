import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

type TLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: TLayoutProps) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
}
