import React from "react"
import logo from "../assets/images/gleafink-name.png"
import "../styles/topHeader.style.css"

const TopHeader = () => {
  return (
    <div className="navbar-wrapper">
      <div className="fixing-width">
        <div>
          <img
            src={logo}
            alt="Gleafink"
            style={{ width: "110px", height: "26px" }}
          />
        </div>
        <div>Gleafink Console</div>
      </div>

      {/* <p>GK</p> */}
    </div>
  )
}

export default TopHeader
