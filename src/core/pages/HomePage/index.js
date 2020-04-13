import React, { Component } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Slider from "react-slick"

import Spinner from "core/components/Spinner"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import styles from "./Homepage.module.scss"

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

const GET_PROJECTS_FRONTPAGE = gql`
  {
    projectsPostType {
      nodes {
        title
        slug
        featuredImage {
          sourceUrl(size: PROJECT_IMAGE_MEDIUM)
        }
      }
    }
  }
`

class HomePage extends Component {
  render() {
    var slickSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: "linear",
      nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
      prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
    }
    return (
      <Query query={GET_PROJECTS_FRONTPAGE}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <div className={styles.carouselLoading}>
                <Spinner dark />
              </div>
            )
          if (error) return false
          return (
            <div className={styles["carousel-wrapper"]}>
              <Slider {...slickSettings}>
                {data.projectsPostType.nodes.map((carouselItem, key) => (
                  <img
                    src={carouselItem.featuredImage.sourceUrl}
                    alt={carouselItem.title}
                    key={key}
                  />
                ))}
              </Slider>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default HomePage
