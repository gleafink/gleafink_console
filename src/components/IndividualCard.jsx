import React from "react"
import { Card } from "antd"
import "../styles/IndividualCard.style.css"

const IndividualCard = ({ item }) => {
  return (
    <Card hoverable className="clickable-card">
      <div>
        {item.icon}
        <div>{item.name}</div>
      </div>
    </Card>
  )
}

export default IndividualCard
