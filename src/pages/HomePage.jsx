import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Home from "./Home";
import ContactPage from "./ContactPage";
import Footer from "./Footer";
import Service from "./Service";
import About from "./About";
import LocationScreen from "./LocationScreen";

const HomePage = () => {
    const [showScrollUp, setShowScrollUp] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShowScrollUp(true);
        } else {
            setShowScrollUp(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <div>
            <Helmet>
                <title>Solar Cleaner Shop</title>
                <meta
                    name="description"
                    content="Welcome to Solar Cleaner Shop. We offer eco-friendly solar panel cleaning services, renewable energy solutions, and expert support. Discover our services today!"
                />
                <meta
                    name="keywords"
                    content="Solar Cleaner Shop, Solar Panel Cleaning, Renewable Energy, Eco-friendly Cleaning, Solar Panel Maintenance"
                />
                <meta name="author" content="Solar Cleaner Shop" />
                <meta property="og:title" content="Home - Solar Cleaner Shop" />
                <meta
                    property="og:description"
                    content="Explore Solar Cleaner Shop's eco-friendly services for solar panel cleaning and maintenance. Keep your solar panels in optimal condition with us."
                />
                <meta
                    property="og:image"
                    content="https://149356857.v2.pressablecdn.com/wp-content/uploads/2024/03/46_1.jpg"
                />
                <meta property="og:url" content="https://www.solarcleanershop.com" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Home - Solar Cleaner Shop" />
                <meta
                    name="twitter:description"
                    content="Join Solar Cleaner Shop for professional solar panel cleaning and renewable energy solutions."
                />
                <meta
                    name="twitter:image"
                    content="https://149356857.v2.pressablecdn.com/wp-content/uploads/2024/03/46_1.jpg"
                />
                <link rel="canonical" href="https://www.solarcleanershop.com" />
            </Helmet>
            <Home />
            <Service />
            <About />
            <ContactPage />
            <div className="px-10 z-0">
                <LocationScreen />
            </div>
            {showScrollUp && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-yellow-500 text-white p-3 px-5 rounded-full shadow-lg hover:bg-yellow-600 transition-all z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    ↑
                </motion.button>
            )}
            <Footer />
        </div>
    );
};

export default HomePage;
