import React, { Component } from "react";
import styles from "./styles.css";


class TextClip extends Component {
  constructor () {
    super();
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <a
            className={styles.quotes}
            href="https://www.google.com/search?q=oh+wow%2C+oh+wow%2C+oh+wow"
            target="_blank"
            >

            &nbsp;Oh wow, <br />
            &nbsp;&nbsp;oh wow,&nbsp; <br />
            &nbsp;&nbsp;oh wow&nbsp;

          </a>
        </div>
        <div className={styles.bgHolderOne}>
        </div>
      </div>
    )
  }
}

export default TextClip
