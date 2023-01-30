import './App.css'

function App() {
  return (
    <div>
      <header>
        <h1>Our Wedding</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#details">Details</a>
            </li>
            <li>
              <a href="#rsvp">RSVP</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            vulputate orci euismod odio iaculis, eu tempor nulla commodo.
            Integer at urna aliquam, auctor est ut, molestie magna.
          </p>
        </section>
        <section id="details">
          <h2>Details</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            vulputate orci euismod odio iaculis, eu tempor nulla commodo.
            Integer at urna aliquam, auctor est ut, molestie magna.
          </p>
        </section>
        <section id="rsvp">
          <h2>RSVP</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            vulputate orci euismod odio iaculis, eu tempor nulla commodo.
            Integer at urna aliquam, auctor est ut, molestie magna.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Our Wedding</p>
      </footer>
    </div>
  )
}

export default App
