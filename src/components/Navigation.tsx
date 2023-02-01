import Link from "./Link"

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
    <nav className='flex items-center p-6 text-center lg:justify-center' id='navbar'>
      <ul>
        {
          NAVIGATION_LINKS.map(({title, href}) => {
            return <li><Link href={href} title={title} disabled={false}/></li>
          })
        }
      </ul>
    </nav>
  )
}

export default Navigation
