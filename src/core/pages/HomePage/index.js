import React, { Component } from "react"
import { getPosts } from "./getData"

class HomePage extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    let postUrl = `${getPosts}`
    fetch(postUrl)
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          posts: data,
        })
      })
  }

  render() {
    let listposts = this.state.posts.map((post, index) => {
      return (
        <div key={index}>
          <h4>{post.title.rendered}</h4>
          <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      )
    })

    return (
      <article>
        <h1>Posts</h1>
        {listposts}
      </article>
    )
  }
}

export default HomePage