import React from 'react';
import { Helmet } from 'react-helmet-async';
import "../services.css";
import { motion } from "framer-motion";

const Service = () => {
    const Services = [
        {
            name: "Solar Panel Cleaning",
            image: "https://plus.unsplash.com/premium_photo-1682145327489-c84344d98779?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "Professional cleaning to ensure optimal energy efficiency.",
        },
        {
            name: "Maintenance Services",
            image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "Regular maintenance to extend the lifespan of your panels.",
        },
        {
            name: "Consultation",
            image: "https://solarpower.guide/solar-energy-insights/images/solar-panel-cleaning.jpg",
            desc: "Expert advice to keep your system running efficiently.",
        },
        {
            name: "Installation",
            image: "https://images.unsplash.com/photo-1527766833261-b09c3163a791?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "Seamless installation of solar panels for your home or business.",
        },
        {
            name: "System Upgrades",
            image: "https://images.unsplash.com/photo-1573495804687-f6ce71245450?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "Upgrade your solar system for improved performance and efficiency.",
        },
        {
            name: "Energy Audits",
            image: "https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "Comprehensive energy audits to identify potential savings.",
        },
        {
            name: "Battery Backup Installation",
            image: "https://images.unsplash.com/photo-1587582423112-2cae3e7dc772?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "Reliable battery backup solutions for uninterrupted power.",
        },
        {
            name: "Monitoring and Analytics",
            image: "https://images.unsplash.com/photo-1573496771156-2ecb9315c2d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "Real-time monitoring and analytics for your solar system.",
        },
        {
            name: "Solar Panel Recycling",
            image: "https://images.unsplash.com/photo-1576495199013-4fe7f590d34c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "Eco-friendly recycling solutions for outdated solar panels.",
        },
        {
            name: "Custom Design and Planning",
            image: "https://images.unsplash.com/photo-1580889628894-c66e2ec7dfb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "Tailored solar panel systems designed to meet your needs.",
        },
    ];


    return (
        <>
            <Helmet>
                <title>Our Services - Solar Solutions</title>
                <meta
                    name="description"
                    content="Explore our wide range of solar solutions including cleaning, maintenance, installation, and system upgrades. Experience professional services tailored to meet your needs."
                />
                <meta
                    name="keywords"
                    content="solar services, solar panel cleaning, solar maintenance, solar installation, system upgrades, energy audits"
                />
                <meta name="author" content="Your Company Name" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />
            </Helmet>
            <section id="service" className="bg-white pt-7 h-full flex items-center justify-center">
                <div className="mx-auto text-center overflow-hidden">
                    <motion.h2
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 10, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="md:text-6xl text-5xl font-bold p-8"
                    >
                        Our Services
                    </motion.h2>
                    <div className="relative flex gap-6 animate-scroll p-10">
                        {Services.map((item, index) => (
                            <div
                                key={index}
                                className="card flex-shrink-0 bg-white shadow-lg rounded-lg p-4 w-64 lg:w-1/3 md:w-1/3 min-w-[calc(33.333%-1rem)] cursor-pointer"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-48 rounded-lg object-cover mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;
