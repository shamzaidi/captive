import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <video autoPlay loop muted>
                <source src="./video/fullhdmain.mp4" type="video/mp4" />
            </video>
            <div className="banner-content">
                <h1>BESPOKE EVENT MANAGEMENT <br/> SERVICES</h1>
                <p>Our unique approach to event management is tailored to perfectly
reflect our client's needs. We provide customised services that
allow us to turn your vision into reality.</p>
                <a className="banner-btn" >Learn More &#8594;</a>
            </div>
        </div>
    );
}

export default Banner;
