import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Carousel = () => {
    const slides = [
        { type: 'image', src: heroImg, alt: 'Hero 1' },
        { type: 'video', src: heroVideo },
        { type: 'image', src: heroImg02, alt: 'Hero 2' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Automatically change slide every 5 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [slides.length]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div>
            {/* Helmet Metadata */}
            <Helmet>
                <title>Dynamic Carousel - Seamless Image and Video Transitions</title>
                <meta
                    name="description"
                    content="Experience a dynamic carousel featuring seamless transitions between images and videos. Designed for an immersive user experience with smooth animations."
                />
                <meta
                    name="keywords"
                    content="carousel, image slider, video slider, dynamic carousel, React carousel, seamless transitions, Framer Motion, UI design"
                />
                <meta name="author" content="Your Name or Company" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Dynamic Carousel - Seamless Image and Video Transitions"
                />
                <meta
                    property="og:description"
                    content="Explore a modern carousel featuring stunning image and video transitions with smooth animations. Perfect for your next web project."
                />
                <meta property="og:url" content="https://yourwebsite.com/carousel" />
                <meta
                    property="og:image"
                    content="https://yourwebsite.com/path-to-your-carousel-image.jpg"
                />
                <meta
                    property="og:image:alt"
                    content="A preview of the dynamic carousel featuring image and video transitions"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Dynamic Carousel - Seamless Image and Video Transitions"
                />
                <meta
                    name="twitter:description"
                    content="Modern and responsive carousel with smooth image and video transitions. Perfect for websites and applications."
                />
                <meta
                    name="twitter:image"
                    content="https://yourwebsite.com/path-to-your-carousel-image.jpg"
                />
                <meta
                    name="twitter:image:alt"
                    content="A responsive carousel with image and video transitions"
                />
                <link rel="canonical" href="https://yourwebsite.com/carousel" />
            </Helmet>

            <div className="block lg:hidden relative">
                {/* Slides */}
                <div className="overflow-hidden relative rounded-lg h-96">
                    {slides.map((slide, index) => (
                        <motion.div
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full ${index === currentIndex ? 'block' : 'hidden'
                                }`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: index === currentIndex ? 1 : 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            {slide.type === 'image' ? (
                                <motion.img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="w-full h-full object-cover rounded-lg"
                                    loading="lazy"
                                />
                            ) : (
                                <motion.video
                                    src={slide.src}
                                    controls
                                    className="w-full h-full object-cover rounded-lg"
                                    autoPlay
                                    muted
                                    loop
                                />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg"
                    aria-label="Previous Slide"
                >
                    ‹
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg"
                    aria-label="Next Slide"
                >
                    ›
                </button>
            </div>
        </div>
    );
};

export default Carousel;
