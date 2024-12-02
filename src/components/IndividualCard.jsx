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
        <div className="card-div-wrapper">
          {console.log(item.icon, "test")}
          {typeof item.icon === "string" ? (
            <img
              src={item.icon}
              alt={item.name}
              style={{
                height: `${item.name === "Superset" ? "35px" : "40px"}`,
                width: `${item.name === "Superset" ? "90px" : "40px"}`,
              }}
            />
          ) : (
            item.icon
          )}

          <div className="card-title">{item.name}</div>
          {item.description && (
            <div className="card-description">{item.description}</div>
          )}
        </div>
      </Card>
    </a>
  )
}

export default IndividualCard
