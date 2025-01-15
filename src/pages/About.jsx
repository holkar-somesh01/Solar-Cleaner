import React, { useState } from 'react';
import { motion } from "framer-motion";

const About = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <div id="about" className="h-full py-20 px-10 bg-white">
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex text-center items-center justify-center mb-10"
                >
                    <h1 className="text-slate-700 text-5xl font-bold">About</h1>
                </motion.div>
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
                    <div className="flex flex-col gap-6 items-center lg:w-1/2 overflow-hidden">
                        <div className="flex gap-4">
                            <motion.img
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 10, opacity: 1 }}
                                whileHover={{ scale: 1.1, rotate: 2 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                src="https://image.made-in-china.com/2f0j00SDnckJHhEPzG/Best-Solar-Panel-Cleaning-Brush-Solar-Panel-Cleaning-Equipment-X4.jpg"
                                alt="Solar Panel Cleaning Brush"
                                className="h-32 mt-10 lg:mt-20 w-auto shadow-lg rounded-md cursor-pointer"
                            />
                            <motion.img
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 10, opacity: 1 }}
                                whileHover={{ scale: 1.1, rotate: -2 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                src="https://exterior-cleaning-solutions.co.uk/wp-content/uploads/2024/05/Industrial-Scale-Solar-Panel-Cleaning-Challenges-and-Solutions.jpg"
                                alt="Industrial Solar Cleaning"
                                className="h-40 lg:h-52 w-48 md:w-auto lg:w-auto rounded-md cursor-pointer"
                            />
                        </div>
                        <motion.img
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 10, opacity: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            src="https://specsolar.com.au/wp-content/uploads/SF_Cleaning_2_1000x700.jpg"
                            alt="Solar Cleaning"
                            className="h-40 lg:h-52 w-auto shadow-lg rounded-md cursor-pointer"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <div className="border-4 rounded-lg p-6 bg-white shadow-xl">
                            <h2 className="text-3xl lg:text-4xl text-center font-bold underline text-blue-600 mb-4">
                                ABOUT US
                            </h2>
                            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-4">
                                Skilancer Solar
                            </h3>
                            <p className="text-base lg:text-lg text-justify text-gray-600 leading-relaxed">
                                Skilancer Solar is all about making solar power plant installations sustainable through its innovative & technology-patented products. At our core, we believe sustainability can only be achieved with continuous innovation and quality products. Skilancer Solar strives to play a significant role by making solar power plants self-sustainable across the world, thus reducing the carbon footprint for a better tomorrow! <br />
                                {!show && <a className="text-blue-600 font-semibold cursor-pointer" onClick={() => setShow(true)}>Read More</a>}
                            </p>
                            {show && (
                                <p className="text-base lg:text-lg text-justify text-gray-600 leading-relaxed mt-4">
                                    Skilancer Solar is the first indigenous robotics & automation company for large-scale solar power plants. Skilancer Solar has been instrumental in providing year-round maximum efficiency of solar PV modules. Our cloud-based, internet-connected fleet of smart robotic systems ensures efficient management of solar power plants.
                                    <br />
                                    <a className="text-blue-600 font-semibold cursor-pointer" onClick={() => setShow(false)}>View Less</a>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center gap-10 mt-10">
                    <div className="bg-orange-200 rounded-lg p-5 shadow-lg">
                        <h3 className="bg-violet-600 text-white text-2xl text-center py-2 rounded-lg mb-5">
                            WHY SKILANCER SOLAR?
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800">
                            <li className="mb-2">Our Product USP is its weight</li>
                            <li className="mb-2">Custom-built solution as per site requirements</li>
                            <li className="mb-2">Unmatched after-sales support with more than 98% uptime</li>
                            <li className="mb-2">Suitable for existing and upcoming solar plants</li>
                            <li className="mb-2">Suitable for rooftop and ground mount installations</li>
                            <li className="mb-2">Ability to handle site undulations and module alignments</li>
                            <li className="mb-2">Widest range of commercial offerings</li>
                            <li className="mb-2">Our Product offers bi-directional daily cleaning</li>
                        </ul>
                    </div>
                    <div className="flex-col gap-5 hidden md:flex lg:flex w-full">
                        <div className="flex gap-5">
                            <motion.img
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.4 }}
                                src="https://thumbs.dreamstime.com/b/woman-worker-cleaning-solar-panels-installation-outdoors-335222905.jpg"
                                alt="Worker cleaning solar panels"
                                className="h-36 lg:h-40 w-auto shadow-lg rounded-md cursor-pointer"
                            />
                            <motion.img
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                transition={{ duration: 0.4 }}
                                src="https://hekabot.com/wp-content/uploads/2023/07/1-1024x576.jpeg"
                                alt="Solar cleaning robot"
                                className="h-24 lg:h-28 w-auto shadow-lg rounded-md cursor-pointer"
                            />
                            <motion.img
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.4 }}
                                src="https://hekabot.com/wp-content/uploads/2023/07/1-1024x576.jpeg"
                                alt="Solar robot"
                                className="h-36 lg:h-40 w-auto shadow-lg rounded-md cursor-pointer"
                            />
                        </div>
                        <div className="flex gap-5">
                            <motion.img
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                transition={{ duration: 0.4 }}
                                src="https://t4.ftcdn.net/jpg/02/12/78/05/360_F_212780575_jCx2m2E7XMr1xUmaMMnb3hbVMqApo2PO.jpg"
                                alt="Solar cleaner"
                                className="h-28 lg:h-32 w-auto shadow-lg rounded-md cursor-pointer"
                            />
                            <motion.img
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.4 }}
                                src="https://hycleaner.de/wp-content/uploads/2024/05/Vorlage_6100x638_grossesBild_Beitragsbild_webp-scaled.webp"
                                alt="Automated cleaning"
                                className="h-36 lg:h-40 w-auto shadow-lg rounded-md cursor-pointer"
                            />
                            <motion.img
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                transition={{ duration: 0.4 }}
                                src="https://ejq4r5ztkxr.exactdn.com/wp-content/uploads/2022/12/Solar-panels.jpg"
                                alt="Solar panels"
                                className="h-24 lg:h-32 w-64 shadow-lg rounded-md cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10 bg-slate-200 text-black font-semibold rounded-lg p-6 shadow-lg">
                    <h3 className="text-3xl text-center mb-5">WHAT MAKES US STAND OUT</h3>
                    <ul className="list-disc pl-5 text-lg">
                        <li className="mb-2">No additional structure required</li>
                        <li className="mb-2">No external power supply required</li>
                        <li className="mb-2">Self-cleaning of brushes and solar panel on Robot</li>
                        <li className="mb-2">Separate charging dock alongside panels</li>
                        <li className="mb-2">No alignment issues</li>
                        <li className="mb-2">Guaranteed increased power generation</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
