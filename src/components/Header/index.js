import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';


const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Link className={styles.logoClink} to="/">
        <span className={styles.logoC}></span>
      </Link>
      <a className={styles.link} href="https://github.com/wataru358/wataruito.com" target="_blank">
        <i className="fa fa-github" aria-hidden></i>
      </a>
      <a className={styles.link} href="https://twitter.com/_wataruito" target="_blank">
        <i className="fa fa-twitter-square " aria-hidden></i>
      </a>
      <a className={styles.link} href="https://www.facebook.com/wataru.ito.79656" target="_blank">
        <i className="fa fa-facebook-square" aria-hidden></i>
      </a>
    </nav>
  </header>
);
export default Header;
