import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>First comes love, then comes marriage.</p>
        <p>
        <code>marta + sergi</code> are inviting you to celebrate everlasting love.
        </p>
        <p>
          Our story
          
          What happens when you stop looking and start living?
          Destiny, that's what.
          When Simon started frequenting cafes instead of bars and Sarah stopped saying yes to blind dates, the stars finally began to align. A conversation between strangers standing in line for their morning latte turned into friendship, then romance, and finally, love.
          It turns out all we had to do was give up the search for serendipity. We learned to let go, let live, and let love happen. Now it's time for our shared journey to begin!
        </p>
      </header>
    </div>
  )
}

export default App
