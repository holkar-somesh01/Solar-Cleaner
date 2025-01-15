import React, { useEffect, useState } from 'react'
import Home from './Home'
import ContactPage from './ContactPage'
import Footer from './Footer'
import Service from './Service'
import About from './About'
import { motion } from 'framer-motion'
import LocationScreen from './LocationScreen'

const HomePage = () => {
    const [showScrollUp, setShowScrollUp] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Show or hide Scroll Up Button based on scroll position
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShowScrollUp(true);
        } else {
            setShowScrollUp(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (

        <div>
            <Home />
            <Service />
            <About />
            <ContactPage />
            <div className='px-10 z-0'>
                <LocationScreen />
            </div>
            {showScrollUp && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-5  right-5 bg-yellow-500 text-white p-3 px-5 rounded-full shadow-lg hover:bg-yellow-600 transition-all z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    ↑
                </motion.button>
            )}
            <Footer />
        </div>

    )
}

export default HomePage
