import React from 'react';
import './Services.css'; // Import the CSS file for styling

const Services = () => {
    const servicesData = [
        {
            img: "../../serviceImg/s1.png",
            title: "⦿",
            description: 'Event concept creation and theming.'
        },
        {
            img: "../../serviceImg/s2.png",
            title: '⦿',
            description: 'Copyrighting, Editing & Social Media Advertising for the event.'
        },
        {
            img: "../../serviceImg/Rectangle-31-2.png",
            title: '⦿',
            description: 'Photography, Videography and State of Art Creation.'
        },
        {
            img: "../../serviceImg/Rectangle-31-3.png",
            title: '⦿',
            description: 'Setup for digital broadcast & live streaming of events along with live chats.'
        },
        {
            img: "../../serviceImg/Rectangle-31-4.png",
            title: '⦿',
            description: 'Fabrication of stages, stands and any custom mounting of facade.'
        },
        {
            img: "../../serviceImg/Rectangle-31-5.png",
            title: '⦿',
            description: 'Deployment of AV equipment & provision of technicians & content creation experts to bring your vison to life.'
        },
        {
            img: "../../serviceImg/Rectangle-31-6.png",
            title: '⦿',
            description: 'Digital Mockups, Graphical Design and Digital Showcase Implementation of dual provision ohvsical and digital ticketing and entry tallying systems.'
        },
        {
            img: "../../serviceImg/Rectangle-31-7.png",
            title: '⦿',
            description: 'Photography, Videography Procurement, storage and distribution of gift items, merchandise and branded utility items.'
        },
       
        // Add more services as needed
        // https://captiveevents.com/wp-content/uploads/2023/12/Rectangle-31-8.png
        // https://captiveevents.com/wp-content/uploads/2023/12/Rectangle-31-9.png
        // https://captiveevents.com/wp-content/uploads/2023/12/Rectangle-31-10.png
        // https://captiveevents.com/wp-content/uploads/2023/12/Rectangle-31-11.png
        // https://captiveevents.com/wp-content/uploads/2023/12/Rectangle-31-12.png
    ];

    return (
        <section className="services">
        <div className='d-flex' style={{display:"flex", justifyContent:"space-between"}}>
        <h2 className="services-title">SERVICES</h2>
        
        <button className="banner-btn ">View More</button>
        </div>
        <div className="services-container">
            {servicesData.map((service, index) => (
                <div className="service-box" key={index} style={{ backgroundImage: `url(${service.img})` }}>
                    
                    <div className="service-hover-content">
                        <h2 className='gradient-text'>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
    );
};

export default Services;
