import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationScreen = () => {
    const shopLocation = {
        latitude: 20.0015,
        longitude: 75.2020,
    };
    const [address, setAddress] = useState(null);

    useEffect(() => {
        const getAddress = async () => {
            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${shopLocation.latitude}&lon=${shopLocation.longitude}&format=json`
                );
                const data = await response.json();
                setAddress(data.display_name);
            } catch (error) {
                console.error("Error fetching address:", error);
                setAddress("Address not found.");
            }
        };

        getAddress();
    }, [shopLocation]);

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="View the shop location of Solar Cleaner on an interactive map. Address details are displayed using real-time location data."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta charSet="UTF-8" />
            </Helmet>

            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 z-0">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Shop Location</h2>

                <p className="text-xl font-semibold mb-6 text-center bg-slate-100 text-black p-4 rounded-lg shadow-lg">
                    Here is the location of our shop:
                </p>

                <MapContainer
                    center={[shopLocation.latitude, shopLocation.longitude]}
                    zoom={13}
                    style={{ height: '400px', width: '100%', zIndex: 0 }}
                    className="rounded-lg shadow-md"
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[shopLocation.latitude, shopLocation.longitude]}>
                        <Popup>Our Shop Location</Popup>
                    </Marker>
                </MapContainer>

                <div className="mt-6 text-center">
                    {address ? (
                        <div className="mt-6 text-center p-4 bg-green-100 border-l-4 border-green-500 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
                            <p className="text-lg font-semibold text-gray-800">
                                <span className="text-green-700">Address:</span> {address}
                            </p>
                        </div>
                    ) : (
                        <div className="mt-6 text-center p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
                            <p className="text-lg text-gray-800">
                                Loading address...
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default LocationScreen;
