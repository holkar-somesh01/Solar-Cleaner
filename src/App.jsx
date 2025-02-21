import React from 'react'
import Footer from './pages/Footer'
import Navbar from './pages/Navbar'
import Service from './pages/Service'
import ContactPage from './pages/ContactPage'
import About from './pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LocationScreen from './pages/LocationScreen'
import NotFound from './pages/NotFound'

const App = () => {
  return <>
    <BrowserRouter>
      <div className='fixed w-[100%] z-30'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/service' element={<Service />} />
        <Route path='/about' element={<About />} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/location' element={<LocationScreen />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter >

  </>
}

export default App
