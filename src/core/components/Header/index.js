import React, { Component } from "react"
import { NavLink } from "react-router-dom"

import { Query } from "react-apollo"
import gql from "graphql-tag"

import styles from "./Header.module.scss"

const GET_HEADER_MAIN_QUERY = gql`
  {
    menuItems(where: { location: HEADER_MENU }) {
      nodes {
        id
        label
        url
      }
    }
    headlessSettings {
      ustawieniaAplikacji {
        mainApplicationLink
        logo
      }
    }
  }
`

class Header extends Component {
  render() {
    return (
      <Query query={GET_HEADER_MAIN_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return false
          if (error) return console.log(error)
          return (
            <div className={styles.header}>
              <div className={styles.logo}>
                <a
                  href="/"
                  dangerouslySetInnerHTML={{
                    __html: data.headlessSettings.ustawieniaAplikacji.logo,
                  }}
                />
              </div>
              <ul>
                {data.menuItems.nodes.map((menuItem) => (
                  <li key={menuItem.id}>
                    <NavLink exact to={menuItem.url} activeClassName={styles.active}>
                      {menuItem.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default Header
