import React, { useState } from 'react';
import './AllServices.css';

const AllServices = () => {
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
            description: 'Setup for digital broadcast & live streaming of events along with live chats'
        },
        {
            img: "../../serviceImg/Rectangle-31-5.png",
            title: '⦿',
            description: 'Fabrication of stages, stands and any custom mounting of facade.'
        },
        {
            img: "../../serviceImg/Rectangle-31-6.png",
            title: '⦿',
            description: 'Deployment of AV equipment & provision of technicians & content creation experts to bring your vison to life.'
        },
        {
            img: "../../serviceImg/Rectangle-31-7.png",
            title: '⦿',
            description: 'Digital Mockups, Graphical Design and Digital Showcase Implementation of dual provision ohvsical and digital ticketing and entry tallying systems.'
        },
        {
            img: "../../serviceImg/Rectangle-31-8.png",
            title: '⦿',
            description: 'Photography, Videography Procurement, storage and distribution of gift items, merchandise and branded utility items.'
        },
        {
            img: "../../serviceImg/Rectangle-31-9.png",
            title: '⦿',
            description: 'Printing of banners, brochures, cards, fliers, posters, etc.'
        },
        {
            img: "../../serviceImg/Rectangle-31-10.png",
            title: '⦿',
            description: 'We secure premium venues, valet parking and other allied services that elevate a visitors experience.'
        },
        {
            img: "../../serviceImg/Rectangle-31-11.png",
            title: '⦿',
            description: 'Our network of collaborators who are artists, performers, musicians, influencers and much more that will add a spark of exuberance to our clients events.'
        },
        {
            img: "../../serviceImg/Rectangle-31-12.png",
            title: '⦿',
            description: 'Equipment rental services for most types of A.V. and camera equipments.'
        },
       
       
        // Add more services as needed
        // https://captiveevents.com/wp-content/uploads/2023/12/Rectangle-31-8.png
        // https://captiveevents.com/wp-content/uploads/2023/12/Rectangle-31-9.png
        // https://captiveevents.com/wp-content/uploads/2023/12/Rectangle-31-10.png
        // https://captiveevents.com/wp-content/uploads/2023/12/Rectangle-31-11.png
        // https://captiveevents.com/wp-content/uploads/2023/12/Rectangle-31-12.png
    ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < servicesData.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {servicesData.map((service, index) => (
          <div key={index} className="service-card1">
            <div
              className="service-img"
              style={{ backgroundImage: `url(${service.img})` }}
            />
            <div className="service-content1">
              <h3 className="service-title1">{service.title}</h3>
              <p className="service-description1">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="prev-btn1" onClick={handlePrev}>
        ❮
      </button>
      <button className="next-btn1" onClick={handleNext}>
        ❯
      </button>
    </div>
  );
};

export default AllServices;
