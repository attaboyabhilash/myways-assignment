import React, { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdClose } from "react-icons/md"
import { RiArrowDownSFill } from "react-icons/ri"
import { BsFillLightningFill } from "react-icons/bs"

function SmallNavigation() {
  const [bar, setBar] = useState(false)
  const [drop, setDrop] = useState(false)
  return (
    <>
      <GiHamburgerMenu className="menu" onClick={() => setBar(true)} />
      <div
        style={bar ? { display: "block" } : { display: "none" }}
        className="small-navig"
      >
        <MdClose className="close-bar" onClick={() => setBar(false)} />
        <div className="navigs">
          <div className="for-you-div" onClick={() => setDrop(drop => !drop)}>
            For You
            <RiArrowDownSFill
              className="for-you"
              style={drop && { transform: "rotate(180deg)" }}
            />
          </div>
          <div
            style={drop ? { display: "block" } : { display: "none" }}
            className="drop-down-small"
          >
            <ul>
              <li>Find Matching Internships</li>
              <li>Hire Right Talent</li>
              <li>Work From Home</li>
            </ul>
          </div>
          <div>
            <BsFillLightningFill className="instant-apply" />
            Instant Apply
          </div>
          <div>Pricing</div>
          <div>About Us</div>
        </div>
      </div>
      <div
        style={bar ? { display: "block" } : { display: "none" }}
        className="shadow"
      ></div>
    </>
  )
}

export default SmallNavigation
