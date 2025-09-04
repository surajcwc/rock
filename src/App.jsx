import { useState } from 'react'

import './App.css'
import Navbar from './Navbar.jsx'
import Hero from './hero.jsx'
import Banner from './banner.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
   
    <>
     <div>
    <Banner />
    <Navbar />
    <Hero />
    </div>
      <div className='tkla'>
        <button>clickme</button>
      </div>
      
    </>
  )
}


export default App
