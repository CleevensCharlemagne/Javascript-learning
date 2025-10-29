import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Header'
import Contact from './Contact'

function App() {
  return (
    <div className='contacts-container'>
      <Contact 
        img="../images/cat.jpg"
        name="Mr. Whiskerson"
        phone="(509) 3434-3430"
        email="whiskerson@email.com"
      />
      <Contact 
        img="../images/dog.jpg"
        name="Fluffykins"
        phone="(509) 3142-3430"
        email="fluff@email.com"
      />
      <Contact 
        img="../images/rabbit.jpg"
        name="Felix"
        phone="(509) 4343-3430"
        email="felix@email.com"
      />
      <Contact 
        img="../images/butterfly.jpg"
        name="Pumpkin"
        phone="(509) 3232-3430"
        email="pumpkin@email.com"
      />
      
    </div>
  )
}

export default App
