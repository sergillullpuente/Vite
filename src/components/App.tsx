import './App.css'
import Navigation from './Navigation'

function App() {
  return (
    <div>
      <header>
        <h1>Our Wedding</h1>
        <Navigation />
      </header>
      <main>
        <section id="about">
          <h2 className='invisible'>About</h2>
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
