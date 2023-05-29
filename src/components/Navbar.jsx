import { nanoid } from "nanoid"
import React, { useState } from "react"

function Navbar({ list = [{ link: "https://google.com", name: "Google" }] }) {
  const [active, setActive] = useState(false)

  function toggle() {
    setActive((prev) => !prev)
  }

  return (
    <div className="nav">
      <div className="button-container">
        <button className="toggle" onClick={toggle}>
          {active ? "✖" : "☰"}
        </button>
      </div>
      <nav className={`main-nav ${active ? "open" : "close"}`}>
        <ul>
          {list &&
            list.map((item, index) => {
              return (
                <a key={index} href={item.link}>
                  <li>{item.name}</li>
                </a>
              )
            })}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
