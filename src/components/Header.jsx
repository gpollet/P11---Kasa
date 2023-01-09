import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
    <img src="/images/logo-red.png" alt="Logo Kasa" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
