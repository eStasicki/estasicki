import React from "react"

import styles from "./Spinner.module.scss"

import classNames from "classnames/bind"
const cx = classNames.bind(styles)

const Spinner = ({ dark }) => (
  <div className={cx("spinnerIcon", dark ? "spinnerIconDarken" : "")}>
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

export default Spinner
