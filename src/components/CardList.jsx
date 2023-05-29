import React from "react"
import { nanoid } from "nanoid"
import Card from "./Card"

function CardList({ list }) {
  return (
    <ul className="card-list">
      {list &&
        list.map((item) => {
          return (
            <li className="card" key={nanoid()}>
              <Card linkTo={item.linkTo} img={item.img} />
            </li>
          )
        })}
    </ul>
  )
}

export default CardList
