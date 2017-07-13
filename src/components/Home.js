import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './styles.css';

const Home = ({ children }) => {
  return (
    <div>
      <div
        className={styles.mainWrap}
        style={
        {
          position:'relative',
        }
      }>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
