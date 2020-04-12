import React, { Component } from "react"
import { NavLink } from "react-router-dom"

import { getSettings, getMainMenu } from "headless-settings"

import styles from "./Header.module.scss"

const datas = getSettings

class Header extends Component {
  state = {
    loading: true,
    mainApplicationLink: null,
    applicationTitle: null,
    menu: [],
  }

  async componentDidMount() {
    const url = datas
    const response = await fetch(url)
    const data = await response.json()
    this.setState({
      applicationTitle: data.acf.logo,
      mainApplicationLink: data.acf.main_application_link,
      loading: false,
    })

    // Fetch Main Menu
    fetch(getMainMenu)
      .then((response) => {
        return response.json()
      })
      .then((menu) => {
        this.setState({ menu: menu.items })
      })
      .catch((error) => console.log(error))
  }

  render() {
    return (
      <div className={styles["header"]}>
        <div className={styles.logo}>
          <a
            href={this.state.mainApplicationLink}
            dangerouslySetInnerHTML={{ __html: this.state.applicationTitle }}
          ></a>
        </div>
        <ul>
          {this.state.menu.map((item) => (
            <li key={item.title}>
              <NavLink exact to={item.url} activeClassName={styles.active}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Header
