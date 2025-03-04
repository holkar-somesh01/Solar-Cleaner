// import React from 'react';
// import { motion } from "framer-motion"

// const About = () => {
//     return (
//         <div>
//             <div id="about" className="h-full py-20 px-10 bg-white">
//                 <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
//                     <div className="flex flex-col gap-6 items-center lg:w-1/2">
//                         <div className="flex gap-4">
//                             <motion.img
//                                 initial={{ x: -100, opacity: 0 }}
//                                 whileInView={{ x: 0, opacity: 0.7 }}
//                                 transition={{ duration: 1, delay: 1 }}
//                                 src="https://image.made-in-china.com/2f0j00SDnckJHhEPzG/Best-Solar-Panel-Cleaning-Brush-Solar-Panel-Cleaning-Equipment-X4.jpg"
//                                 alt="Solar Panel Cleaning Brush"
//                                 className="h-32 mt-10 lg:mt-20 w-auto shadow-lg rounded-md"
//                             />
//                             <motion.img
//                                 initial={{ x: 100, opacity: 0 }}
//                                 whileInView={{ x: 0, opacity: 0.7 }}
//                                 transition={{ duration: 1, delay: 1 }}
//                                 src="https://exterior-cleaning-solutions.co.uk/wp-content/uploads/2024/05/Industrial-Scale-Solar-Panel-Cleaning-Challenges-and-Solutions.jpg"
//                                 alt="Industrial Solar Cleaning"
//                                 className="h-40 lg:h-52 w-auto shadow-lg rounded-md"
//                             />
//                         </div>
//                         <motion.img
//                             initial={{ y: 100, opacity: 0 }}
//                             whileInView={{ y: 0, opacity: 0.7 }}
//                             transition={{ duration: 1, delay: 1 }}
//                             src="https://specsolar.com.au/wp-content/uploads/SF_Cleaning_2_1000x700.jpg"
//                             alt="Solar Cleaning"
//                             className="h-40 lg:h-52 w-auto shadow-lg rounded-md"
//                         />
//                     </div>
//                     <div className="lg:w-1/2">
//                         <div className="border-4 rounded-lg p-6 bg-white shadow-xl">
//                             <h2 className="text-3xl lg:text-4xl text-center font-bold underline text-blue-600 mb-4">
//                                 ABOUT US
//                             </h2>
//                             <h3 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-4">
//                                 Skilancer Solar
//                             </h3>
//                             <p className="text-base lg:text-lg text-justify text-gray-600 leading-relaxed">
//                                 Skilancer Solar is all about making solar power plant installations sustainable through its innovative & technology-patented products. At our core, we believe sustainability can only be achieved with continuous innovation and quality products. Skilancer Solar strives to play a significant role by making solar power plants self-sustainable across the world, thus reducing the carbon footprint for a better tomorrow!
//                             </p>
//                             <p className="text-base lg:text-lg text-justify text-gray-600 leading-relaxed mt-4">
//                                 Skilancer Solar is the first indigenous robotics & automation company for large-scale solar power plants. Skilancer Solar has been instrumental in providing year-round maximum efficiency of solar PV modules. Our cloud-based, internet-connected fleet of smart robotic systems ensures efficient management of solar power plants.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex flex-col lg:flex-row justify-center gap-10 mt-10">
//                     <div className="bg-orange-200 rounded-lg p-5 shadow-lg">
//                         <h3 className="bg-violet-600 text-white text-2xl text-center py-2 rounded-lg mb-5">
//                             WHY SKILANCER SOLAR?
//                         </h3>
//                         <ul className="list-disc pl-5 text-gray-800">
//                             <li className="mb-2">Our Product USP is its weight</li>
//                             <li className="mb-2">Custom-built solution as per site requirements</li>
//                             <li className="mb-2">Unmatched after-sales support with more than 98% uptime</li>
//                             <li className="mb-2">Suitable for existing and upcoming solar plants</li>
//                             <li className="mb-2">Suitable for rooftop and ground mount installations</li>
//                             <li className="mb-2">Ability to handle site undulations and module alignments</li>
//                             <li className="mb-2">Widest range of commercial offerings</li>
//                             <li className="mb-2">Our Product offers bi-directional daily cleaning</li>
//                         </ul>
//                     </div>
//                     <div className="flex flex-col gap-5">
//                         <div className="flex gap-5">
//                             <img
//                                 src="https://thumbs.dreamstime.com/b/woman-worker-cleaning-solar-panels-installation-outdoors-335222905.jpg"
//                                 alt="Worker cleaning solar panels"
//                                 className="h-32 lg:h-40 w-auto shadow-lg rounded-md"
//                             />
//                             <img
//                                 src="https://hekabot.com/wp-content/uploads/2023/07/1-1024x576.jpeg"
//                                 alt="Solar cleaning robot"
//                                 className="h-20 lg:h-28 w-auto shadow-lg rounded-md"
//                             />
//                             <img
//                                 src="https://hekabot.com/wp-content/uploads/2023/07/1-1024x576.jpeg"
//                                 alt="Solar robot"
//                                 className="h-32 lg:h-40 w-auto shadow-lg rounded-md"
//                             />
//                         </div>
//                         <div className="flex gap-5">
//                             <img
//                                 src="https://t4.ftcdn.net/jpg/02/12/78/05/360_F_212780575_jCx2m2E7XMr1xUmaMMnb3hbVMqApo2PO.jpg"
//                                 alt="Solar cleaner"
//                                 className="h-24 lg:h-32 w-auto shadow-lg rounded-md"
//                             />
//                             <img
//                                 src="https://hycleaner.de/wp-content/uploads/2024/05/Vorlage_6100x638_grossesBild_Beitragsbild_webp-scaled.webp"
//                                 alt="Automated cleaning"
//                                 className="h-32 lg:h-40 w-auto shadow-lg rounded-md"
//                             />
//                             <img
//                                 src="https://ejq4r5ztkxr.exactdn.com/wp-content/uploads/2022/12/Solar-panels.jpg"
//                                 alt="Solar panels"
//                                 className="h-24 lg:h-32 w-auto shadow-lg rounded-md"
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* What Makes Us Stand Out */}
//                 <div className="mt-10 bg-slate-200 text-black font-semibold rounded-lg p-6 shadow-lg">
//                     <h3 className="text-3xl text-center mb-5">WHAT MAKES US STAND OUT</h3>
//                     <ul className="list-disc pl-5 text-lg">
//                         <li className="mb-2">No additional structure required</li>
//                         <li className="mb-2">No external power supply required</li>
//                         <li className="mb-2">Self-cleaning of brushes and solar panel on Robot</li>
//                         <li className="mb-2">Separate charging dock alongside panels</li>
//                         <li className="mb-2">No alignment issues</li>
//                         <li className="mb-2">Guaranteed increased power generation</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;
