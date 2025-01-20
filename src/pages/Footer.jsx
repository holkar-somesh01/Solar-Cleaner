import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r to-slate-800 from-violet-950 text-white py-12 px-10 mt-12">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center lg:text-left">
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-yellow-400">About Us</h3>
                    <p className="text-gray-300">
                        We provide professional solar panel cleaning services to ensure your system operates at maximum efficiency.
                        Trust us to keep your panels spotless and efficient all year round.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-yellow-400">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#services" className="hover:text-yellow-500 transition duration-300">Our Services</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-yellow-500 transition duration-300">About Us</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-yellow-500 transition duration-300">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-yellow-400">Contact Us</h3>
                    <p className="text-gray-300">
                        📍 123 Solar Street, Eco City <br />
                        <a href="tel:+91456-7890" className="cursor-pointer hover:text-yellow-500 transition duration-300">📞 (123) 456-7890</a> <br />
                        <a href="" className="cursor-pointer hover:text-yellow-500 transition duration-300">
                            ✉️ info@solarcleanershop.com
                        </a>
                    </p>
                </div>
            </div>
            <div className="mt-6 text-center">
                <div className="flex justify-center space-x-6">
                    <a href="https://facebook.com" className="text-white hover:text-yellow-500 transition duration-300">
                        <FaFacebookF className="text-2xl" />
                    </a>
                    <a href="https://twitter.com" className="text-white hover:text-yellow-500 transition duration-300">
                        <FaTwitter className="text-2xl" />
                    </a>
                    <a href="https://instagram.com" className="text-white hover:text-yellow-500 transition duration-300">
                        <FaInstagram className="text-2xl" />
                    </a>
                    <a href="https://linkedin.com" className="text-white hover:text-yellow-500 transition duration-300">
                        <FaLinkedinIn className="text-2xl" />
                    </a>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-6 text-center">
                <div className="block md:hidden lg:hidden">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Solar Cleaner Shop. <br />
                        <span className="flex justify-center items-center">
                            Created By Someshwar.
                            <a
                                href="mailto:someshwarsholkar22@gmail.com?subject=Hello%20Developer%20-%20Fullstack%20Developer%20Opportunity&body=Hello%20Developer,%0A%0AI%20am%20interested%20in%20hiring%20you%20as%20a%20Fullstack%20Developer.%20I%20am%20willing%20to%20discuss%20compensation%20and%20details%20further.%0A%0ABest%20regards,%0A[Your%20Name]"
                                className="text-sky-300 ml-2">
                                <MdOutlineMailOutline />
                            </a>
                        </span>
                        All Rights Reserved.
                    </p>
                </div>
                <div className="hidden md:block lg:block">
                    <p className="text-gray-500 text-sm">
                        <span className="flex justify-center items-center">
                            &copy; {new Date().getFullYear()} Solar Cleaner Shop. Created By Someshwar.
                            <a
                                href="mailto:someshwarsholkar22@gmail.com?subject=Hello%20Developer%20-%20Fullstack%20Developer%20Opportunity&body=Hello%20Developer,%0A%0AI%20am%20interested%20in%20hiring%20you%20as%20a%20Fullstack%20Developer.%20I%20am%20willing%20to%20discuss%20compensation%20and%20details%20further.%0A%0ABest%20regards,%0A[Your%20Name]"
                                className="text-sky-400 ml-2">
                                <MdOutlineMailOutline />
                            </a>
                        </span>
                        All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



