import React from 'react';
import '../styles/Locations.css'; 
import mapImage from '../assests/map-image.jpg';



const Locations = () => {
    return (
        <section className="locations-section">
            
            <div className="locations-left">
                <p className="locations-subheading">OUR LOCATIONS</p>
                <h2 className="locations-headline">
                    FIND US AT THESE<br />CONVENIENT<br />LOCATIONS
                </h2>
                <button className="our-store-btn">
                    Our Store <span className="arrow">&gt;</span>
                </button>
            </div>
            <div className="locations-right">
                <img src={mapImage} alt="Map showing locations" className="map-image" />
            </div>
                
                
            
                    

        
        </section>
    );
};

export default Locations;