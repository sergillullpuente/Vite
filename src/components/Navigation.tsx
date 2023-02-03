import Link from "./Link"
import React from "react";

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
      <nav className='flex items-center p-6 text-center lg:justify-center' id='navbar'>
        <ul className='flex items-center space-x-4'>
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
