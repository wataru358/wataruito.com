import React, { Component } from 'react';
import styles from './styles.css';

import CellAutomataRotate from '../art/CellAutomataRotate';
import CellAutomataOrg from '../art/CellAutomataOrg';
import CellAutomataHeart from '../art/CellAutomataHeart';

const compArray = [
  ()=>(<CellAutomataRotate />),
  ()=>(<CellAutomataOrg />),
  ()=>(<CellAutomataHeart />)
];

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display:0
    }
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
