import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>Star Wars</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;