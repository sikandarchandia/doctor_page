import React from 'react'
import Navbar from './component/Pages/Navbar'
import Home from './component/Pages/Home'
import AboutUs from './component/Pages/AboutUs'
import Services from './component/Pages/Services'
import PracticeAddressTiming from './component/Pages/PracticeAddressTiming'
import Gallery from './component/Pages/Gallery'
import ContactUs from './component/Pages/ContactUs'
import Footer from './component/Pages/Footer'

function App() {


  return (
    <div className='bg-gray-900'>
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <PracticeAddressTiming />
      <Gallery />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
