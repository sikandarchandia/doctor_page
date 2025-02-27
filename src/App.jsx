import React from 'react'
import Navbar from './component/Pages/Navbar'
import Home from './component/Pages/Home'
import AboutUs from './component/Pages/AboutUs'
import Services from './component/Pages/Services'

function App() {


  return (
    <div className='bg-gray-900'>
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
    </div>
  )
}

export default App
