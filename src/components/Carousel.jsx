import React from "react"

const Carousel = ({ carouselData }) => {
  //console.log(carouselData)
  return <img className="carousel" src={carouselData.pictures[0]} alt={carouselData.title} />
}

export default Carousel
