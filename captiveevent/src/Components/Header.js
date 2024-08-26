import React, { useEffect, useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    let navigate = useNavigate();

    const navigateToAbout = () => {
        navigate('/about');
    };

    useEffect(() => {
        const button = document.querySelector('.button1');
        if (button) {
            setTimeout(() => {
                button.classList.add('show');
            }, 500); // Delay for the animation start
        }
    }, []);

    return (
        <>
            <header className="header">
                <div className="logo1">
                    <img
                        src="https://captiveevents.com/wp-content/uploads/2023/09/Untitled_design__2___1_-removebg-1.png"
                        style={{ width: '70%' }}
                        alt="Logo"
                    />
                </div>
                <div className="container1">
                    <div className="nav">
                        {/* Hamburger menu for mobile view */}
                        <div className="hamburger" onClick={toggleMenu}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        {/* Navigation links */}
                        <ul className={isOpen ? 'active' : ''}>
                            <li><a onClick={() => { navigate('/') }} style={{ cursor: 'pointer' }}>Home</a></li>
                            <li><a onClick={navigateToAbout} style={{ cursor: 'pointer' }}>About</a></li>
                            <li><a onClick={() => { navigate('/all-services') }} style={{ cursor: 'pointer' }}>Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a onClick={() => { navigate('/contact') }} style={{ cursor: 'pointer' }}>Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="social-icons">
    <a href="https://www.facebook.com" style={{ color: '#3b5998' }}><FaFacebookF /></a>
    <a href="https://www.x.com" style={{ color: 'Black' }}><FaX /></a>
    <a href="https://www.instagram.com" style={{ color: '#E4405F' }}><FaInstagram /></a>
    <a href="https://www.linkedin.com" style={{ color: '#0077b5' }}><FaLinkedin /></a>
</div>
            </header>
        </>
    );
};

export default Header;
