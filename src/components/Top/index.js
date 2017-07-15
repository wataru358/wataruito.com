import React, { Component } from 'react';
import styles from './styles.css';

import CellAutomataRotate from '../art/CellAutomataRotate';
import CellAutomataOrg from '../art/CellAutomataOrg';
import CellAutomataHeart from '../art/CellAutomataHeart';
import LinesPerspective from '../art/LinesPerspective';

const compArray = [
  (i)=>(<div key={i} className={styles.enterAnimation + ' ' + styles.animationWrapper}><CellAutomataRotate /></div>),
  (i)=>(<div key={i} className={styles.enterAnimation + ' ' + styles.animationWrapper}><CellAutomataOrg /></div>),
  (i)=>(<div key={i} className={styles.enterAnimation + ' ' + styles.animationWrapper}><CellAutomataHeart /></div>),
  (i)=>(<div key={i} className={styles.enterAnimation + ' ' + styles.animationWrapper}><LinesPerspective /></div>)
];

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display:0,
      compArray,
      rightOpacity:0,
      leftOpacity:0,
      rightDisabled:false,
      leftDisabled:true,

    }

    this.navOpacityOn = .65

    this.navButtonTimeoutID;
  }
  //
  showNavButtons(){
    this.setState({
      rightOpacity:this.navOpacityOn,
      leftOpacity:this.navOpacityOn
    });
    this.navButtonTimeoutID = setTimeout(this.hideNavButtons.bind(this),1800);
  }

  hideNavButtons() {
    // console.log('hideNavButtons')
    this.setState({
      rightOpacity:0,
      leftOpacity:0
    });
  }
  displayNextArt() {
    // just precaution
    // should work only when button's opacity is more than 0
    // as I opted out to put the button there anyway for better CSS animation

    let update = { }
    if(this.state.display + 1 < this.state.compArray.length) {
      update = {
        display:this.state.display + 1
      }
      /*if(update.display + 1 < this.state.compArray.length) {

          update.rightDisabled = false;

      } else if (update.display + 1 >= this.state.compArray.length){

          update.rightDisabled = true;
          update.leftDisabled = false;

      }*/

    }

    // this actually not gonna happen here?
    if(update.display === 0) {
      update.leftDisabled = true;
    }

    this.setState(update);
  }
  displayPrevArt() {

    let update = {}
    if(this.state.display - 1 >= 0) {
      update = {
        display:this.state.display - 1
      }
    }
    this.setState(update)
  }
  render() {


    return (
      <div className={styles.artContainer}
        onMouseMove={this.showNavButtons.bind(this)}
        >
        <div className={styles.navHolder}>


            {
              this.state.compArray[this.state.display](this.state.display)
            }

          <div className={styles.topNav +' '+ styles.topNavRight}
            onClick={this.displayNextArt.bind(this)}
            data-disabled={
              this.state.display + 1 >= this.state.compArray.length ? true : false
            }
            style={
              {
                opacity:this.state.rightOpacity
              }
            }>
            <i className={'fa fa-arrow-circle-right'}></i>
          </div>

          <div className={styles.topNav +' '+ styles.topNavLeft}
            onClick={this.displayPrevArt.bind(this)}
            data-disabled={
              0 === this.state.display ? true : false
            }
            style={
              {
                opacity:this.state.leftOpacity
              }
            }
            >

            <i className={'fa fa-arrow-circle-left'}></i>
          </div>

        </div>
      </div>
    );
  }
};

export default Top;
