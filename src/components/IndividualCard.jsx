import React from "react"
import { Card } from "antd"
import "../styles/IndividualCard.style.css"

const IndividualCard = ({ item }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={item.link ? item.link : "#"}
    >
      <Card hoverable className="clickable-card">
        <div>
          {item.icon}
          <div>{item.name}</div>
        </div>
      </Card>
    </a>
  )
}

export default IndividualCard
