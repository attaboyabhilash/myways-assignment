import React from "react"
import { Link } from "react-router-dom"
import MyWays from "../assets/myways-logo.png"
import { RiArrowDownSFill } from "react-icons/ri"
import { BsFillLightningFill } from "react-icons/bs"

function Header() {
  return (
    <nav>
      <Link>
        <img src={MyWays} alt="myways-logo" />
      </Link>
      <div className="navigations">
        <div>
          For You
          <RiArrowDownSFill className="for-you" />
        </div>
        <div>
          <BsFillLightningFill className="instant-apply" />
          Instant Apply
        </div>
        <div>Pricing</div>
        <div>About Us</div>
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
