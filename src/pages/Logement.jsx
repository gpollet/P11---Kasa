import React from "react"
import { useLocation } from "react-router-dom"
import logements from "../api/logements.json"
import Carousel from "../components/Carousel"
import Dropdown from "../components/Dropdown"
import Tag from "../components/Tag"

const Logement = () => {
  // Retrieves data for the current home based on the url
  let location = useLocation()
  const logementData = logements.find((logement) => "/" + logement.id === location.pathname)
  //console.log(logementData)

  const logementTags = logementData.tags.map((tag) => <Tag tagName={tag} key={tag} />)

  // Displays the rating
  const logementRatingStars = Array.from({ length: logementData.rating }, (_, i) => {
    return (
      <img
        className="rating-stars"
        src="/images/icons/star-red.png"
        alt="Filled star"
        key={"red-star" + i}
      />
    )
  })
  const logementRatingToFive = Array.from({ length: 5 - logementData.rating }, (_, i) => {
    return (
      <img
        className="rating-stars"
        src="/images/icons/star-empty.png"
        alt="Empty star"
        key={"empty-star" + i}
      />
    )
  })

  const createEquipmentList = (
    <ul>
      {logementData.equipments.map((equipment) => (
        <li key={equipment}>{equipment}</li>
      ))}
    </ul>
  )

  return (
    <>
      <Carousel carouselData={logementData} />

      <div className="logement-top-info">
        <div>
          <h1>{logementData.title}</h1>
          <h2>{logementData.location}</h2>
        </div>
        <div className="host-presentation">
          <p>{logementData.host.name}</p>
          <img
            className="host-portrait"
            src={logementData.host.picture}
            alt={"Photo de " + logementData.host.name}
          />
        </div>
      </div>

      <div className="tags-and-rating">
        <div className="tagList">{logementTags}</div>
        <div className="host-rating">
          {logementRatingStars}
          {logementRatingToFive}
        </div>
      </div>

      <div className="logement-dropdown">
        <Dropdown title="Description" content={<p>{logementData.description}</p>} />
        <Dropdown title="Équipements" content={createEquipmentList} />
      </div>
    </>
  )
}

export default Logement
