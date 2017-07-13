import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';


const Footer = () => (
 <footer className={styles.footer}>
  <Link to="/">&copy; W.</Link>
 </footer>
);
export default Footer;
