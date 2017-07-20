import React, { Component } from "react";
import styles from "./styles.css";
import MakeLines from "./MakeLines";


class LinesPerspective extends Component {
  constructor () {
    super();

    // getting window width and height, safe way
    let w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    width = w.innerWidth || e.clientWidth || g.clientWidth,
    height = w.innerHeight|| e.clientHeight|| g.clientHeight;

    this.canvasWidth = width;
    this.canvasHeight = height;

  }
  componentDidMount() {
    this.makeLines = new MakeLines(this.canvas);
    this.makeLines.start();
  }
  componentWillUnmount() {
    this.makeLines.stop();
  }
  // set the width and height of the canvas for context,
  // then set styles as well
  render() {
    return (
      <div className={styles.wrapper + ' enterAnimation'}>

        <canvas
          ref={(canvas) => { this.canvas = canvas; }}
          className={styles.myCanvas}
          width={this.canvasWidth}
          height={this.canvasHeight}
        />
        <div className={styles.text}>
        ART?!
        </div>
      </div>
    )
  }
}
export default LinesPerspective
