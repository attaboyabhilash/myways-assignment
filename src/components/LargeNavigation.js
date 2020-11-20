import React, { useState } from "react"
import { RiArrowDownSFill } from "react-icons/ri"
import { BsFillLightningFill } from "react-icons/bs"

function LargeNavigation() {
  const [drop, setDrop] = useState(false)
  return (
    <div className="menu-bar">
      <div className="for-you-div" onClick={() => setDrop(drop => !drop)}>
        For You
        <RiArrowDownSFill
          className="for-you"
          style={drop && { transform: "rotate(180deg)" }}
        />
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
  )
}

export default LargeNavigation
