// import { MdEmail, MdOutlineCall, MdOutlineMailOutline } from "react-icons/md"


// const Footer = () => {
//     return (
//         <footer className="bg-gradient-to-r to-slate-800 from-violet-950 text-white py-10 px-10 mt-12">
//             <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
//                 {/* About Section */}
//                 <div>
//                     <h3 className="text-xl font-bold mb-4">About Us</h3>
//                     <p className="text-gray-400">
//                         We provide professional solar panel cleaning services to ensure your system operates at maximum efficiency.
//                     </p>
//                 </div>

//                 {/* Quick Links */}
//                 <div>
//                     <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//                     <ul className="space-y-2">
//                         <li>
//                             <a href="#services" className="hover:text-yellow-500">Our Services</a>
//                         </li>
//                         <li>
//                             <a href="#about" className="hover:text-yellow-500">About Us</a>
//                         </li>
//                         <li>
//                             <a href="#contact" className="hover:text-yellow-500">Contact Us</a>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Contact Info */}
//                 <div>
//                     <h3 className="text-xl font-bold mb-4">Contact Us</h3>
//                     <p className="text-gray-400">
//                         📍 123 Solar Street, Eco City <br />
//                         <a className="cursor-pointer" onClick={e => window.location.href = "tel:+91456-7890"}>📞 (123) 456-7890</a> <br />
//                         <a href="mailto:someshwarsholkar22@gmail.com" className="cursor-pointer">
//                             ✉️ info@solarcleanershop.com
//                         </a>
//                     </p>
//                 </div>
//             </div>

//             <div className="mt-5 border-t border-gray-700 pt-6 text-center">
//                 <div className="block md:hidden lg:hidden">
//                     <p className="text-gray-500 text-sm">
//                         &copy; {new Date().getFullYear()} Solar Cleaner Shop.
//                         <ul type='none'>
//                             <li className="flex justify-center items-center">
//                                 <span className="flex">
//                                     Created By Someshwar.
//                                     <a className="text-center items-center flex justify-center"
//                                         href="mailto:someshwarsholkar22@gmail.com?subject=Hello%20Developer%20-%20Fullstack%20Developer%20Opportunity&body=Hello%20Developer,%0A%0AI%20am%20interested%20in%20hiring%20you%20as%20a%20Fullstack%20Developer.%20I%20am%20willing%20to%20discuss%20compensation%20and%20details%20further.%0A%0ABest%20regards,%0A[Your%20Name]">
//                                         <MdOutlineMailOutline className="text-sky-300" />
//                                     </a>

//                                 </span>
//                             </li>
//                         </ul>
//                         All Rights Reserved.
//                     </p>
//                 </div>
//                 <div className="hidden md:block lg:block">
//                     <p className="text-gray-500 text-sm">
//                         <span className="flex justify-center items-center">
//                             &copy; {new Date().getFullYear()} Solar Cleaner Shop.Created By Someshwar.
//                             <a className="text-center items-center flex justify-center"
//                                 href="mailto:someshwarsholkar22@gmail.com?subject=Hello%20Developer%20-%20Fullstack%20Developer%20Opportunity&body=Hello%20Developer,%0A%0AI%20am%20interested%20in%20hiring%20you%20as%20a%20Fullstack%20Developer.%20I%20am%20willing%20to%20discuss%20compensation%20and%20details%20further.%0A%0ABest%20regards,%0A[Your%20Name]">
//                                 <MdOutlineMailOutline className="text-sky-400" />
//                             </a>

//                             All Rights Reserved.
//                         </span>
//                     </p>
//                 </div>
//                 {/* <div className="flex justify-center space-x-4 mt-4">
//                     <a href="#" className="hover:text-yellow-500">
//                         <i className="fab fa-facebook-f"></i>
//                     </a>
//                     <a href="#" className="hover:text-yellow-500">
//                         <i className="fab fa-twitter"></i>
//                     </a>
//                     <a href="#" className="hover:text-yellow-500">
//                         <i className="fab fa-instagram"></i>
//                     </a>
//                     <a href="#" className="hover:text-yellow-500">
//                         <i className="fab fa-linkedin-in"></i>
//                     </a>
//                 </div> */}
//             </div>
//         </footer>
//     );
// };

// export default Footer;








import { MdEmail, MdOutlineCall, MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Social media icons

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r to-slate-800 from-violet-950 text-white py-12 px-10 mt-12">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center lg:text-left">
                {/* About Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-yellow-400">About Us</h3>
                    <p className="text-gray-300">
                        We provide professional solar panel cleaning services to ensure your system operates at maximum efficiency.
                        Trust us to keep your panels spotless and efficient all year round.
                    </p>
                </div>

                {/* Quick Links */}
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

                {/* Contact Info */}
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

            {/* Social Media Links */}
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
                                className="text-sky-300 ml-2"
                            >
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
                                className="text-sky-400 ml-2"
                            >
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



