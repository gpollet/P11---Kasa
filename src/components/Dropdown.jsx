import React, { useState } from "react"

const Dropdown = ({ title, content }) => {
  let [dropdownDisplay, setDropdownDisplay] = useState(false)
  const manageDropdownState = () => {
    if (!dropdownDisplay) {
      return { chevron: "/images/icons/chevron-down.png", displayClass: "dropdown-hidden" }
    } else {
      return { chevron: "/images/icons/chevron-up.png", displayClass: "dropdown-visible" }
    }
  }
  return (
    <div className="dropdown">
      <div
        className="dropdown-title"
        tabIndex={0}
        onClick={() => setDropdownDisplay(!dropdownDisplay)}
        onKeyDown={(event) => {
          if (event.key === " " || event.key === "Enter") setDropdownDisplay(!dropdownDisplay)
        }}
        aria-label={dropdownDisplay ? "Masquer le contenu" : "Afficher le contenu"}
      >
        <span>{title}</span>
        <img src={manageDropdownState().chevron} alt="Chevron" className="dropdown-chevron" />
      </div>
      <div className={"dropdown-content " + manageDropdownState().displayClass}>{content}</div>
    </div>
  )
}

export default Dropdown
