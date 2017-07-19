import React, { Component } from "react";
import styles from "./styles.css";

let c = document.createElement("canvas");
c.width = 1000;
c.height = 1000;
let ctx = c.getContext("2d");

let grd = ctx.createLinearGradient(0,0,1000,1000);
grd.addColorStop(0,"orange");
grd.addColorStop("0.3","yellow");
grd.addColorStop("0.5","green");
grd.addColorStop("0.6","cyan");
grd.addColorStop("0.8","blue");
grd.addColorStop(1,"violet");

ctx.fillStyle = grd;
ctx.fillRect(0,0,1000,1000);

let dataURL = c.toDataURL("image/png");
//console.log(dataURL);

class TextClip extends Component {
  constructor () {
    super();
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <a
            className={styles.quotes +' '+ styles.textClip}
            href="https://www.google.com/search?q=oh+wow%2C+oh+wow%2C+oh+wow"
            target="_blank"
            style={
              {
                backgroundImage:'url('+dataURL+')'
              }
            }
            >

            &nbsp;Oh wow, <br />
            &nbsp;&nbsp;oh wow,&nbsp; <br />
            &nbsp;&nbsp;oh wow&nbsp;

          </a>
        </div>
        <div className={styles.bgHolderOne}>
        </div>
        <div className={styles.bgHolderTwo}>
        </div>
      </div>
    )
  }
}

export default TextClip
