import React, { Component } from "react"
import { NavLink } from "react-router-dom"

import { Query } from "react-apollo"
import gql from "graphql-tag"

import Spinner from "core/components/Spinner"

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
  state = {
    loading: true,
  }
  componentDidMount() {
    this.setState({
      loading: false,
    })
  }
  render() {
    return (
      <div className={styles[this.state.loading ? "header-loading" : "header"]}>
        <Query query={GET_HEADER_MAIN_QUERY}>
          {({ loading, data }) => {
            if (loading) return <Spinner dark />
            return (
              <>
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
                      <NavLink
                        exact
                        to={menuItem.url}
                        activeClassName={styles.active}
                      >
                        {menuItem.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default Header
