import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationScreen = () => {
    const [location, setLocation] = useState({
        latitude: 20.03666,  // Example latitude
        longitude: 75.24319, // Example longitude
        errorMessage: null,
    });

    // Replace with the actual coordinates you get from the link
    const locationFromGoogleMaps = {
        latitude: 20.0015,  // Latitude of the location from the link
        longitude: 75.2020, // Longitude of the location from the link
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        errorMessage: null,
                    });
                },
                (error) => {
                    setLocation({
                        latitude: null,
                        longitude: null,
                        errorMessage: error.message,
                    });
                }
            );
        } else {
            setLocation({
                latitude: null,
                longitude: null,
                errorMessage: 'Geolocation is not supported by this browser.',
            });
        }
    }, []);

    return (
        <div>
            <h2>Your Location</h2>
            {location.errorMessage ? (
                <p>Error: {location.errorMessage}</p>
            ) : (
                <>
                    <p>
                        Latitude: {location.latitude} <br />
                        Longitude: {location.longitude}
                    </p>

                    {/* Check if both latitude and longitude are valid numbers */}
                    {location.latitude && location.longitude && !isNaN(location.latitude) && !isNaN(location.longitude) && (
                        <MapContainer
                            center={[location.latitude, location.longitude]}
                            zoom={13} // Set zoom level
                            style={{ height: '400px', width: '100%', zIndex: 0 }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {/* Marker for your current location */}
                            <Marker position={[location.latitude, location.longitude]}>
                                <Popup>Your location</Popup>
                            </Marker>

                            {/* Marker for the location from Google Maps */}
                            <Marker position={[locationFromGoogleMaps.latitude, locationFromGoogleMaps.longitude]}>
                                <Popup>Location from Google Maps</Popup>
                            </Marker>
                        </MapContainer>
                    )}
                </>
            )}
        </div>
    );
};

export default LocationScreen;
