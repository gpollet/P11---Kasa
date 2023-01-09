import React from "react"
import Thumb from "../components/Thumb"
import logements from "../api/logements.json"

const Home = () => {
  const createCards = logements.map((logement) => (
    <Thumb key={logement.id} logement={{ name: logement.title }} />
  ))
  return (
    <>
      <div className="cards-list">{createCards}</div>
    </>
  )
}
export default Home
