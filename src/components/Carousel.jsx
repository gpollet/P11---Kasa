import React, { useState } from "react"

const Carousel = ({ carouselData }) => {
  const [displayedPicture, setDisplayPicture] = useState(0)

  const manageCarouselPictures = (pictureIndex) => {
    // If carousel displays the first picture, and user clicks on "Previous picture", displays the last picture
    if (displayedPicture + pictureIndex < 0) {
      return setDisplayPicture(carouselData.pictures.length - 1)
      // If carousel displays the last picture, and user clicks on "Next picture", displays the first picture
    } else if (displayedPicture + pictureIndex === carouselData.pictures.length) {
      return setDisplayPicture(0)
    } else {
      return setDisplayPicture(displayedPicture + pictureIndex)
    }
  }
  const createCarousel = (
    <div className="carousel-container">
      {carouselData.pictures.length > 1 ? (
        <div
          className="carousel-left-panel"
          onClick={() => {
            manageCarouselPictures(-1)
          }}
          onKeyDown={(event) => {
            if (event.key === " " || event.key === "Enter") {
              manageCarouselPictures(-1)
            }
          }}
          tabIndex={0}
          aria-label="Previous picture"
        >
          <img src="/images/icons/arrow-left.png" alt="Left arrow" />
        </div>
      ) : (
        ""
      )}

      <img
        className="carousel"
        src={carouselData.pictures[displayedPicture]}
        alt={carouselData.title}
      />
      {carouselData.pictures.length > 1 ? (
        <span className="carousel-counter">{displayedPicture+1}/{carouselData.pictures.length}</span>
      ):""}
      {carouselData.pictures.length > 1 ? (
        <div
          className="carousel-right-panel"
          onClick={() => {
            manageCarouselPictures(+1)
          }}
          onKeyDown={(event) => {
            if (event.key === " " || event.key === "Enter") {
              manageCarouselPictures(+1)
            }
          }}
          tabIndex={0}
          aria-label="Next picture"
        >
          <img src="/images/icons/arrow-right.png" alt="Right arrow" />
        </div>
      ) : (
        ""
      )}
    </div>
  )
  return createCarousel
}

export default Carousel
