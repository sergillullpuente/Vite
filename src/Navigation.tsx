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
            return <li> <a href={href}>{title}</a></li>
          })
        }
      </ul>
    </nav>
  )
}

export default Navigation
