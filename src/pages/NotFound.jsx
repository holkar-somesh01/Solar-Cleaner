import React from "react";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-black text-white">
            <div className="text-center">
                <h1 className="text-[10rem] font-extrabold leading-none">404</h1>
                <p className="mt-4 text-2xl font-semibold">Oops! Page Not Found</p>
                <p className="mt-2 text-lg text-gray-400">
                    The page you are looking for doesn't exist or might have been removed.
                </p>
                <a
                    href="/"
                    className="mt-6 inline-block px-8 py-4 text-black bg-white hover:bg-gray-300 rounded-lg text-lg font-medium transition duration-300"
                >
                    Return to Home
                </a>
                <div className="mt-10">
                    <p className="text-gray-600 text-sm">
                        Need help? <a href="/contact" className="underline hover:text-gray-400">Contact us</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
