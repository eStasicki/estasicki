import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

import Header from "core/components/Header"

import HomePage from "core/pages/HomePage"
import Skills from "core/pages/Skills"
import Projects from "core/pages/Projects"
import Blog from "core/pages/Blog"
import Contact from "core/pages/Contact"

import Spinner from "./core/components/Spinner"

import styles from "App.module.scss"

const client = new ApolloClient({
  uri: "https://backend.estasicki.pl/graphql",
})

class App extends Component {
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
      <ApolloProvider client={client}>
        <BrowserRouter>
          {this.state.loading ? (
            <div className={styles[("container", "container-loading")]}>
              <Spinner />
            </div>
          ) : (
            <div className={styles.container}>
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
            </div>
          )}
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}

export default App
