import Menu from "./icons/Menu"
import Link from "./Link"
import React, { useEffect, useRef } from "react";

const NAVIGATION_LINKS = [
  {
    title: "Inici",
    href: "#top"},
  {
    title: "Informació bàsica",
    href: "#info"
  },
  {
    title: "On dormir",
    href: "#sleep"
  },
  {
    title: "Fotos",
    href: "#photos"
  },
  {
    title: "Assistencia",
    href: "#assistence"
  },
]

function Navigation () {
  return (
    <header>
      <input type='checkbox' id='menu' hidden className='peer ' />
      <Menu />
      <nav className='flex items-center p-6 text-center lg:justify-center' id='navbar'>
        <ul className='flex flex-col items-center'>
          {
            NAVIGATION_LINKS.map(({title, href}) => {
              return <li><Link href={href} title={title} disabled={false}/></li>
            })
          }
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
