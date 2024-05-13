import React from 'react';
import css from './BurgerMenu.module.css';

const BurgerMenu = () => {
  return (
    <div className={css.viewport}>
      <header className={css.header}>
        <nav id="nav" className={css.nav} role="navigation">
          <ul
            className={css.navMenu}
            id="menu"
            tabIndex="-1"
            aria-label="main navigation"
            hidden
          >
            <li className={css.navItem}>
              <a href="#" className={css.navLink}>
                Home
              </a>
            </li>
            <li className={css.navItem}>
              <a href="#" className={css.navLink}>
                Shop
              </a>
            </li>
            <li className={css.navItem}>
              <a href="#" className={css.navLink}>
                Blog
              </a>
            </li>
            <li className={css.navItem}>
              <a href="#" className={css.navLink}>
                About
              </a>
            </li>
            <li className={css.navItem}>
              <a href="#" className={css.navLink}>
                Contact
              </a>
            </li>
          </ul>
          <a
            href="#nav"
            className={css.navToggle}
            role="button"
            aria-expanded="false"
            aria-controls="menu"
          >
            <svg
              className={css.menuIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <title>Toggle Menu</title>
              <g>
                <line
                  className={css.menuIconBar}
                  x1="13"
                  y1="16.5"
                  x2="37"
                  y2="16.5"
                />
                <line
                  className={css.menuIconBar}
                  x1="13"
                  y1="24.5"
                  x2="37"
                  y2="24.5"
                />
                <line
                  className={css.menuIconBar}
                  x1="13"
                  y1="24.5"
                  x2="37"
                  y2="24.5"
                />
                <line
                  className={css.menuIconBar}
                  x1="13"
                  y1="32.5"
                  x2="37"
                  y2="32.5"
                />
                <circle className={css.menuIconCircle} r="23" cx="25" cy="25" />
              </g>
            </svg>
          </a>
          <div className={css.splash}></div>
        </nav>
      </header>
      <main className={css.main} role="main">
        <div className={css.gallery} aria-label="gallery">
          {Array.from({ length: 25 }, (_, index) => (
            <a key={index} href="#" className={css.galleryItem}></a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BurgerMenu;
