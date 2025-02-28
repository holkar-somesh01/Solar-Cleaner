import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CgShapeRhombus } from "react-icons/cg";
import { FaLongArrowAltUp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";

const ContactPage = () => {
    const images = [
        "https://thumbs.dreamstime.com/b/woman-worker-cleaning-solar-panels-installation-outdoors-335222905.jpg",
        "https://hekabot.com/wp-content/uploads/2023/07/1-1024x576.jpeg",
        "https://cdn.create.vista.com/api/media/small/620425768/stock-photo-indain-village-farmer-cleaning-water-solar-panels-farmland-concept-renewable",
        "https://hycleaner.de/wp-content/uploads/2024/05/Vorlage_6100x638_grossesBild_Beitragsbild_webp-scaled.webp",
        "https://ejq4r5ztkxr.exactdn.com/wp-content/uploads/2022/12/Solar-panels.jpg",
        "https://149356857.v2.pressablecdn.com/wp-content/uploads/2024/03/46_1.jpg",
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000)

        return () => clearInterval(interval)
    }, [images.length]);

    return (
        <div id="contact" className="pt-10">
            <Helmet>
                <meta
                    name="description"
                    content="Reach out to Solar Cleaner Shop for any inquiries or support. Learn more about our services, contact details, and business hours."
                />
                <meta
                    name="keywords"
                    content="Contact Solar Cleaner Shop, Solar Panel Cleaning Services, Renewable Energy Solutions, Customer Support Solar Cleaner, Eco-friendly cleaning services"
                />
                <meta name="author" content="Solar Cleaner Shop" />
                <meta property="og:title" content="Contact Us - Solar Cleaner Shop" />
                <meta
                    property="og:description"
                    content="Get in touch with us for support or to learn more about our solar panel cleaning services."
                />
                <meta
                    property="og:image"
                    content="https://149356857.v2.pressablecdn.com/wp-content/uploads/2024/03/46_1.jpg"
                />
                <meta property="og:url" content="https://www.solarcleanershop.com/contact" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Contact Us - Solar Cleaner Shop"
                />
                <meta
                    name="twitter:description"
                    content="We are here to assist you with any inquiries related to solar panel cleaning and eco-friendly solutions."
                />
                <meta
                    name="twitter:image"
                    content="https://149356857.v2.pressablecdn.com/wp-content/uploads/2024/03/46_1.jpg"
                />
                <link rel="canonical" href="https://www.solarcleanershop.com/contact" />
            </Helmet>

            <div className="bg-gray-100 min-h-full flex flex-col justify-center items-center px-4 py-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-600">
                        Reach out to us for any inquiries or support. We're here to help!
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
                    <div className="relative">
                        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={images[currentImageIndex]}
                                alt={`Carousel Image ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                            />
                        </div>
                        <div className="flex justify-center mt-4 space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-3 h-3 rounded-full ${index === currentImageIndex
                                        ? "bg-blue-500"
                                        : "bg-gray-400"
                                        }`}
                                ></button>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-50 to-white shadow-xl rounded-xl p-8 h-full">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center border-b-2 border-yellow-500 pb-4">
                            𝖮𝗎𝗋 𝖣𝖾𝗍𝖺𝗂𝗅𝗌
                        </h2>
                        <ul className="grid gap-8">
                            <li className="flex items-start group cursor-pointer">
                                <span className="w-12 h-12 bg-yellow-500 text-white flex items-center justify-center rounded-full shadow-lg mr-6 group-hover:scale-110 transition-transform">
                                    <FaLongArrowAltUp className="text-2xl" />
                                </span>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors">
                                        Address
                                    </h3>
                                    <p className="text-gray-600">
                                        123 Solar Street, Eco City, Renewable State, 45678
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start group cursor-pointer">
                                <span
                                    onClick={() => (window.location.href = "tel:+91(123) 456-7890")}
                                    className="w-12 h-12 bg-yellow-500 text-white flex items-center justify-center rounded-full shadow-lg mr-6 group-hover:scale-110 transition-transform"
                                >
                                    <MdOutlineCall className="text-2xl" />
                                </span>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors">
                                        Phone
                                    </h3>
                                    <p className="text-gray-600">(123) 456-7890</p>
                                </div>
                            </li>
                            <li className="flex items-start group cursor-pointer">
                                <span className="w-12 h-12 bg-yellow-500 text-white flex items-center justify-center rounded-full shadow-lg mr-6 group-hover:scale-110 transition-transform">
                                    <IoMailOutline className="text-2xl" />
                                </span>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors">
                                        Email
                                    </h3>
                                    <p className="text-gray-600">info@solarcleanershop.com</p>
                                </div>
                                {/* <div>
                                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors">
                                        Email
                                    </h3>
                                    <p className="text-gray-600">info@solarcleanershop.com</p>
                                </div> */}
                            </li>
                            <li className="flex items-start group cursor-pointer">
                                <span className="w-12 h-12 bg-yellow-500 text-white flex items-center justify-center rounded-full shadow-lg mr-6 group-hover:scale-110 transition-transform">
                                    <CgShapeRhombus className="text-2xl" />
                                </span>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors">
                                        Business Hours
                                    </h3>
                                    <p className="text-gray-600">
                                        Mon - Fri: 9:00 AM - 6:00 PM <br />
                                        Sat: 10:00 AM - 4:00 PM
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
