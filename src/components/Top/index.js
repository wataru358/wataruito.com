import React, { Component } from 'react';
import styles from './styles.css';

import CellAutomataRotate from '../art/CellAutomataRotate';
import CellAutomataOrg from '../art/CellAutomataOrg';
import CellAutomataHeart from '../art/CellAutomataHeart';

class Top extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className={styles.artContainer}>
        <CellAutomataRotate />
      </div>
    );
  }
};

export default Top;
