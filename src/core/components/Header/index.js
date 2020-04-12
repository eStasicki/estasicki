import React, { Component } from "react"
import { NavLink } from "react-router-dom"

import items from "./items.json"

import styles from "./Header.module.scss"

const navItemList = items.MenuItems

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <ul>
          {navItemList.map((item) => (
            <li key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Header
