import React from "react"
import Thumb from "../components/Thumb"
import logements from "../api/logements.json"
import SectionTopBanner from "../components/SectionTopBanner"

const Home = () => {
  const createCards = logements.map((logement) => (
    <Thumb key={logement.id} logement={logement} />
  ))
  return (
    <>
    <SectionTopBanner />
      <div className="cards-list">{createCards}</div>
    </>
  )
}
export default Home
