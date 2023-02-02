import './App.css'
import Navigation from './Navigation'

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <section id="about">
        </section>
        <section id="details">
        </section>
        <section id="rsvp">
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Our Wedding</p>
      </footer>
    </div>
  )
}

export default App
