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
      display:0,
      showNavButtons:false,
      compArray
    }

    this.navButtonTimeoutID;
  }
  //
  showNavButtons(){
    //clearTimeout(this.navButtonTimeoutID);
    if(!this.state.showNavButtons) {
      this.setState({showNavButtons:true});
      // console.log('setting timeout');
      this.navButtonTimeoutID = window.setTimeout(this.hideNavButtons.bind(this),1800);
    }
  }
  hideNavButtons() {
    // console.log('hideNavButtons')
    this.setState({showNavButtons:false});
  }
  displayNextArt() {
    // just precaution
    if(this.state.display + 1 < this.state.compArray.length) {
      this.setState({display:this.state.display + 1});
    }
  }
  displayPrevArt() {
    // just precaution
    if(this.state.display + 1 >= this.state.compArray.length) {
      this.setState({display:this.state.display - 1});
    }
  }
  render() {
    if(this.state.showNavButtons) {
      var myOpacity = .6
    } else {
      var myOpacity =  0
    }
    return (
      <div className={styles.artContainer}
        onMouseMove={this.showNavButtons.bind(this)}
        >
        <div className={styles.navHolder}>
        {
          this.state.compArray[this.state.display]()
        }
        {
          this.state.display < this.state.compArray.length ? <div className={styles.topNav +' '+ styles.topNavRight}
            onClick={this.displayNextArt.bind(this)}
            style={
              {
                opacity:myOpacity
              }
            }>
            <i className={'fa fa-arrow-circle-right'}></i>
          </div> : null
        }

        {
          this.state.display > 0 ? <div className={styles.topNav +' '+ styles.topNavLeft}
            style={
              {
                opacity:myOpacity
              }
            }
            onClick={this.displayPrevArt.bind(this)}
            >

            <i className={'fa fa-arrow-circle-left'}></i>
          </div> : null
        }

        </div>
      </div>
    );
  }
};

export default Top;
