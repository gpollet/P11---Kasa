import React from "react"
import { useLocation } from "react-router-dom"

const SectionTopBanner = () => {
  let location = useLocation()

  // Dynamically change the section top banner based on the current page
  const topBanners = () => {
    let banner = { url: "/images/sections-banners/", textContent: "" }
    if (location.pathname === "/") {
      banner.url += "home"
      banner.textContent = "Chez vous, partout et ailleurs"
    } else if (location.pathname === "/about") {
      banner.url += "about"
    }
    banner.url += "-top-banner.jpg"
    return banner
  }

  return (
    <div className="top-section-banner">
      <img src={topBanners().url} alt="Bannière section" />
      {topBanners().textContent ? <figure>{topBanners().textContent}</figure> : ""}
    </div>
  )
}

export default SectionTopBanner
