import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './styles.css';

import Top from './Top'

class Hometest extends Component {
  constructor(props) {
    super(props)
  }
  render(props) {
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
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

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
          {console.log(children.props.location.pathname)}
        {
          (children.props.location.pathname === '/' || /art\//i.test(children.props.location.pathname)) ? <Top>{children}</Top> : children
          /*<Top>{children}</Top>*/
        }
      </div>
      <Footer />
    </div>
  );
};

export default Home;
