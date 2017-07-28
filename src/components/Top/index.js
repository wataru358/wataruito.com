import React, { Component } from 'react';
import styles from './styles.css';
import { Link } from 'react-router';

/*import CellAutomataRotate from '../art/CellAutomataRotate';
import CellAutomataOrg from '../art/CellAutomataOrg';
import CellAutomataHeart from '../art/CellAutomataHeart';
import LinesPerspective from '../art/LinesPerspective';
import TextClip from '../art/TextClip';
*/
/*
const compArray = [
  (i)=>(<div key={i} className={styles.enterAnimation + ' ' + styles.animationWrapper}><TextClip /></div>),
  (i)=>(<div key={i} className={styles.enterAnimation + ' ' + styles.animationWrapper}><CellAutomataRotate /></div>),
  (i)=>(<div key={i} className={styles.enterAnimation + ' ' + styles.animationWrapper}><CellAutomataOrg /></div>),
  (i)=>(<div key={i} className={styles.enterAnimation + ' ' + styles.animationWrapper}><CellAutomataHeart /></div>),
  (i)=>(<div key={i} className={styles.enterAnimation + ' ' + styles.animationWrapper}><LinesPerspective /></div>)
];
*/
const routeMap = [
  '/art/CellAutomataRotate',
  '/art/CellAutomataOrg',
  '/art/CellAutomataHeart',
  '/art/LinesPerspective',
  '/art/TextClip',
  '/art/CellAutomataRev'
  ]

class Top extends Component {
  constructor(props) {
    super(props);
    //console.log('Top.props: ',this.props);
    //console.log(routeMap);
    this.state = {
      display:0,
      //compArray,
      routeMap,
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
  updateDisplayFowward() {
    // just precaution
    // should work only when button's opacity is more than 0
    // as I opted out to put the button there anyway for better CSS animation

    let update = { }
    if(this.state.display + 1 < this.state.routeMap.length) {
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
  updateDisplayBackword() {

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


            { // old way
              // this.state.compArray[this.state.display](this.state.display)
              this.props.children
            }

          <Link className={styles.topNav +' '+ styles.topNavRight}
            to={
              this.state.routeMap[this.state.display + 1]
            }
            onClick={this.updateDisplayFowward.bind(this)}
            data-disabled={
              this.state.display + 1 >= this.state.routeMap.length ? true : false
            }
            style={
              {
                opacity:this.state.rightOpacity
              }
            }>
            <i className={'fa fa-arrow-circle-right'}></i>
          </Link>

          <Link className={styles.topNav +' '+ styles.topNavLeft}
            to={
              this.state.display === 1 ? '/' : this.state.routeMap[this.state.display - 1]
            }
            onClick={this.updateDisplayBackword.bind(this)}
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
          </Link>

        </div>

      </div>
    );
  }
};

export default Top;
