import React from "react"
import "App.scss"
import { Route, Switch } from "react-router-dom"

import Header from "core/components/Header"

import HomePage from "core/pages/HomePage"
import Skills from "core/pages/Skills"
import Projects from "core/pages/Projects"
import Blog from "core/pages/Blog"
import Contact from "core/pages/Contact"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  )
}

export default App
