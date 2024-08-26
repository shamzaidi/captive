import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './ServiceIcon.css';
import { useScroll } from './ScrollContext';

const servicesData = [
  {id: 1, title: 'Digital designing and theming', img: "./Icon/design.png"},
  {id: 2, title: 'Fabrication and Logistics', img: "./Icon/distribution.png"},
  {id: 3, title: 'A.V. equipment, lighting and furniture rental', img: "./Icon/public-relation.png"},
  {id: 4, title: 'Digital service suite and social media services', img: "./Icon/digital.png"},
  {id: 5, title: 'Branding and Gift Sourcing', img: "./Icon/brand.png"},
  {id: 6, title: 'Event photography, videography and livestreaming', img: "./Icon/photovideo.png"},
];

const ServiceIcon = () => {
    const { setScrollToId } = useScroll();
    const navigate = useNavigate(); // Initialize the navigate function

    const handleClick = (id) => {
        setScrollToId(id);
        navigate('/OurIconPage'); // Navigate to the OurIconPage after setting the ID
    };

    return (
        <section className="services">
            <div className="container">
                <h2>Our Services</h2>
                <div className="services-grid">
                    {servicesData.map((service) => (
                        <div
                            className="service-card"
                            key={service.id}
                            onClick={() => handleClick(service.id)}
                        >
                            <img src={service.img} alt={service.title} />
                            <h3>{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceIcon;
