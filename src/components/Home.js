import React from 'react';
import Header from './Header';

const Home = ({ children }) => {
  return (
    <div style={
      {
        position:'relative'
      }
    }>
      <Header />
      {children}
    </div>
  );
};

export default Home;
