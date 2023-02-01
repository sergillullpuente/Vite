import './App.css'
import Navigation from './Navigation'

function App() {
  return (
    <div>
      <header className=''>
        <Navigation />
      </header>
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
