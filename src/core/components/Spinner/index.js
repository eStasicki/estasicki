import React, { Component } from "react"

import styles from "./Spinner.module.scss"

class Spinner extends Component {
  render() {
    return (
      <div className={styles.spinnerIcon}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}

export default Spinner
