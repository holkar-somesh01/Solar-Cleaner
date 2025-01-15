import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import ContactPage from './ContactPage'
import Footer from './Footer'
import Service from './Service'
import About from './About'
import LocationScreen from './LocationScreen'

const HomePage = () => {
    return (

        <div>
            {/* <Navbar /> */}
            <Home />
            <Service />
            <About />
            <ContactPage />
            <div className='px-10 z-0'>
                <LocationScreen />
            </div>
            <Footer />
            {/* <About /> */}
        </div>
    )
}

export default HomePage
