import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import styles from "./Homepage.module.scss"

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

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
      <div className={styles["carousel-wrapper"]}>
        <Slider {...slickSettings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    )
  }
}

export default HomePage
