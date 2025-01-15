import React from 'react'

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
            <div className="block lg:hidden relative">
                {/* Slides */}
                <div className="overflow-hidden relative rounded-lg h-96">
                    {slides.map((slide, index) => (
                        <Slide
                            direction={index > currentIndex ? "left" : "right"}
                            in={index === currentIndex}
                            timeout={700}
                            mountOnEnter
                            unmountOnExit
                            key={index}
                        >
                            <div className="absolute top-0 left-0 w-full h-full">
                                {slide.type === "image" ? (
                                    <motion.img
                                        src={slide.src}
                                        alt={slide.alt}
                                        className="w-full h-full object-cover rounded-lg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                    />
                                ) : (
                                    <motion.video
                                        src={slide.src}
                                        controls
                                        className="w-full h-full object-cover rounded-lg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                    />
                                )}
                            </div>
                        </Slide>
                    ))}
                </div>

                {/* Controls */}
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg"
                >
                    ‹
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg"
                >
                    ›
                </button>
            </div>
        </div>
    )
}

export default Carousel