import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    let navigate = useNavigate();

    const navigateToAbout = () => {
        navigate('/about');
    };
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4 className="footer-title">About Us</h4>
                    <p className="footer-text">
                        We specialize in creating captivating events that leave a lasting impression. Our team of experts is dedicated to making your vision a reality.
                    </p>
                </div>
                <div className="footer-column">
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className="footer-links">
                    <li><a onClick={() => { navigate('/') }} style={{ cursor: 'pointer' }}>Home</a></li>
                            <li><a onClick={navigateToAbout} style={{ cursor: 'pointer' }}>About</a></li>
                            <li><a onClick={() => { navigate('/all-services') }} style={{ cursor: 'pointer' }}>Services</a></li>
                            <li><a >Portfolio</a></li>
                            <li><a onClick={() => { navigate('/contact') }} style={{ cursor: 'pointer' }}>Contact</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4 className="footer-title">Contact Us</h4>
                    <p className="footer-text">123 Event Avenue, Suite 100</p>
                    <p className="footer-text">City, State, 12345</p>
                    <p className="footer-text">Phone: (123) 456-7890</p>
                    <p className="footer-text">Email: info@captiveevents.com</p>
                </div>
                <div className="footer-column">
                    <h4 className="footer-title">Follow Us</h4>
                    <div className="social-icons">
    <a href="https://www.facebook.com" style={{ color: '#3b5998' }}><FaFacebookF /></a>
    <a href="https://www.x.com" style={{ color: 'Black' }}><FaX /></a>
    <a href="https://www.instagram.com" style={{ color: '#E4405F' }}><FaInstagram /></a>
    <a href="https://www.linkedin.com" style={{ color: '#0077b5' }}><FaLinkedin /></a>
</div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-bottom-text">&copy; 2024 Captive Events. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
