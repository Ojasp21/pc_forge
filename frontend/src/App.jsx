import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import backgroundImage from './images/pc5.png'
import './images/bgImage.css'
import BuildButton from './components/Button/BuildButton.jsx'
import Allcards from './components/Cards/Allcards.jsx'

function App() {

  return (
    <>
    <div className='App'>
      <Navbar></Navbar>
    </div>
    <div className='bg-image' style={{backgroundImage: `URL(${backgroundImage})`}}>    
    </div>
    <div className='' style={{minHeight:"110vh"}}>
      <BuildButton />
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="app-container">
   <Allcards/>
  </div>
    </>
  )
}

export default App
