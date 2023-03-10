import React from "react"
import { Link } from "react-router-dom"

const Thumb = ({ logement }) => {
  return (
    <Link to={"logements/"+logement.id} className="thumb" >
      <img src={logement.cover} alt={logement.title} />
      <figure>{logement.title}</figure>
    </Link>
  )
}

export default Thumb
