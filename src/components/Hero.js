import React from "react"
import { Link } from "react-router-dom"

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="text">
          <h1>Apply and hear back every time</h1>
          <p>
            Exploring internships or jobs? Say good-bye to the typical job
            portals and use the power of Artificial Intelligence to become
            successful, faster.
          </p>
        </div>
        <div className="button">
          <Link to="/myways-assignment/signup">Get Started</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
