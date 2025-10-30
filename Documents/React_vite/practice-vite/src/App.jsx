import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Header'
import Contact from './Contact'
import cat from "../images/cat.jpg"
import dog from "../images/dog.jpg"
import rabbit from "../images/rabbit.jpg"
import butterfly from "../images/butterfly.jpg"

function App() {
  return (
    <div className='contacts-container'>
      <Contact 
        img={cat}
        name="Mr. Whiskerson"
        phone="(509) 3434-3430"
        email="whiskerson@email.com"
      />
      <Contact 
        img={dog}
        name="Fluffykins"
        phone="(509) 3142-3430"
        email="fluff@email.com"
      />
      <Contact 
        img={rabbit}
        name="Felix"
        phone="(509) 4343-3430"
        email="felix@email.com"
      />
      <Contact 
        img={butterfly}
        name="Pumpkin"
        phone="(509) 3232-3430"
        email="pumpkin@email.com"
      />
      
    </div>
  )
}

export default App
