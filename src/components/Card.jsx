import React from "react"

function Card({ img, linkTo }) {
  return (
    <a href={linkTo}>
      <img src={img} alt="logo" />
    </a>
  )
}

export default Card
