import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Header'
import Contact from './Contact'

function App() {
  return (
    <div className='contacts-container'>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      
    </div>
  )
}

export default App
