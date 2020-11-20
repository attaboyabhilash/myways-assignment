import React from "react"
import { Link } from "react-router-dom"
import MyWays from "../assets/myways-logo.png"
import LargeNavigation from "./LargeNavigation"
import SmallNavigation from "./SmallNavigation"

function Header() {
  return (
    <nav>
      <Link to="/">
        <img src={MyWays} alt="myways-logo" />
      </Link>
      <div className="navigations">
        {window.screen.width > 950 ? <LargeNavigation /> : <SmallNavigation />}
        <Link to="/signup" className="signup">
          SIGN UP
        </Link>
        <Link to="/login" className="login">
          LOGIN
        </Link>
      </div>
    </nav>
  )
}

export default Header
