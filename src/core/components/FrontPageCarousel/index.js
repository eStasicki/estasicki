import React, { Component } from "react"

import { Query } from "react-apollo"
import gql from "graphql-tag"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Slider from "react-slick"

import Spinner from "core/components/Spinner"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import styles from "./FrontPageCarousel.module.scss"

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

const GET_PROJECTS_FRONTPAGE_CAROUSEL = gql`
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

class FrontPageCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    var slickSettings = {
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: "linear",
      nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
      prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
    }
    return (
      <Query query={GET_PROJECTS_FRONTPAGE_CAROUSEL}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <div className={styles.carouselLoading}>
                <Spinner dark />
              </div>
            )
          if (error) return false
          return (
            <div className={styles["wrapper"]}>
              <Slider {...slickSettings}>
                {data.projectsPostType.nodes.map((carouselItem, key) => (
                  <>
                    <img
                      src={carouselItem.featuredImage.sourceUrl}
                      alt={carouselItem.title}
                      key={key}
                    />
                    <div className={styles.projectInfo}>
                      <h1>{carouselItem.title}</h1>
                    </div>
                  </>
                ))}
              </Slider>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default FrontPageCarousel
