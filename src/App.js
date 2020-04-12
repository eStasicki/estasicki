import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

import Header from "core/components/Header"

import { getSettings } from "headless-settings"

import HomePage from "core/pages/HomePage"
import Skills from "core/pages/Skills"
import Projects from "core/pages/Projects"
import Blog from "core/pages/Blog"
import Contact from "core/pages/Contact"

import Spinner from "./core/components/Spinner"

import styles from "App.module.scss"

const datas = getSettings

class App extends Component {
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
  }

  render() {
    return (
      <div
        className={styles[this.state.loading ? "container-loading" : "container"]}
      >
        {this.state.loading ? (
          <Spinner />
        ) : (
          <>
            <Header />
            <div className={styles.wrapper}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/skills" component={Skills} />
                <Route path="/projects" component={Projects} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default App
