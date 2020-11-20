import React, { useState } from "react"
import { Link } from "react-router-dom"
import MyWays from "../assets/myways-logo.png"
import { RiArrowDownSFill } from "react-icons/ri"
import { BsFillLightningFill } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"

function Header() {
  const [drop, setDrop] = useState(false)

  return (
    <nav>
      <GiHamburgerMenu className="menu" />
      <Link to="/">
        <img src={MyWays} alt="myways-logo" />
      </Link>
      <div className="navigations">
        <div className="menu-bar">
          <div className="for-you-div" onClick={() => setDrop(drop => !drop)}>
            For You
            <RiArrowDownSFill className="for-you" />
            <div
              style={
                drop
                  ? {
                      opacity: 1,
                      pointerEvents: "all",
                      transform: "translateY(0px)",
                    }
                  : { opacity: 0 }
              }
              className="drop-down"
            >
              <ul>
                <li>Find Matching Internships</li>
                <li>Hire Right Talent</li>
                <li>Work From Home</li>
              </ul>
            </div>
          </div>
          <div>
            <BsFillLightningFill className="instant-apply" />
            Instant Apply
          </div>
          <div>Pricing</div>
          <div>About Us</div>
        </div>
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
