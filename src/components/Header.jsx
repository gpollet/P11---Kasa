import React from "react"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
    <Link to="/" aria-label="Page d'accueil"><img src="/images/logos/logo-red.png" alt="Logo Kasa" /></Link>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
