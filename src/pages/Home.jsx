import React, { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import solar from '../assets/solar.mp4'

const Home = () => {
    return (
        <section
            id="home"
            className="relative bg-gray-900 text-white text-center py-20 min-h-screen flex items-center justify-center overflow-hidden"
        >
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                // src="https://www.w3schools.com/html/mov_bbb.mp4"
                // src="https://media.istockphoto.com/id/1974067879/video/flying-into-the-sunset-nicoya-peninsula-costa-rica-part-2.mp4?s=mp4-640x640-is&k=20&c=ab_IYna6R98UBfsghBC-zZTdxqkfQStIR5nmqdQksS8="
                src={solar}
                autoPlay
                loop
                playsInline
                muted
                poster="https://example.com/high-quality-thumbnail.jpg"
            />
            <div className="relative z-10 container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Shine Bright with Clean Solar Panels
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    Expert cleaning services to maximize your solar efficiency.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold">
                    Get Started
                </button>
            </div>
            <div
                className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
            ></div>
        </section>
    );
};

export default Home;
