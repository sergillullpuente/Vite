import Link from "./components/Link"

const NAVIGATION_LINKS = [
  {
    title: "Inici",
    href: "#top"},
  {
    title: "Detalls",
    href: "#details"
  },
  {
    title: "RSVP",
    href: "#rsvp"
  },
]

function Navigation () {
  return (
    <nav>
      <ul>
        {
          NAVIGATION_LINKS.map(({title, href}) => {
            return <li> <Link href={href} title={title} disabled={false} isExternal={false}/></li>
          })
        }
      </ul>
    </nav>
  )
}

export default Navigation
