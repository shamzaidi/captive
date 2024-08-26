import React, { useEffect, useRef } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const boxElement = boxRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            boxElement.classList.add('animate');
          } else {
            boxElement.classList.remove('animate');
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as necessary
    );

    if (boxElement) {
      observer.observe(boxElement);
    }

    return () => {
      if (boxElement) {
        observer.unobserve(boxElement);
      }
    };
  }, []);
  const teamMembers = [
    {
      name: 'TALHA OMAR',
      position: 'Founder & CEO',
      image: './images/our7.jpg',
      description: 'Talha ensures that our operations run smoothly, coordinating with our team to deliver top-notch services to our clients.'
      
    },
    {
      name: 'SYED HAMZA ZAIDI',
      position: 'CTO',
      image: './images/our7.jpg',
      description: 'Hamza is the tech visionary behind Captive Event, dedicated to revolutionizing car maintenance with a passion for eco-friendly solutions.'
    },
    {
      name: 'ALEX JOHNSON',
      position: 'Lead Technician',
      image: './images/our7.jpg',
      description: 'Alex leads our skilled technicians, bringing expertise and precision to every car wash and maintenance service.'
    },
    
  ];

  return (
    <div className='page-content'>
    <div className="about-us-container">
     
      <section className="about-us-content" >
        <div className="company-overview" >
          {/* <h2 style={{fontWeight:"bolder"}}>About Klean on Veel</h2> */}
          
    <div className='containerA'>
    
      <div className='para'>
        <h2 className='team-title'> Designing Events with a Purpose</h2>
      <p >
      At Captive Events, we believe in the power of moments – those magical instances that linger in our memories long after they’ve passed. Our journey began with a simple yet profound mission: to transform ordinary gatherings into extraordinary experiences.
          </p>
        </div>
        </div>
        
        </div> 
       
        {/* <div className="mission-vision-values">
          <h3>Our Mission</h3>
          <p>
            Our mission is to revolutionize car maintenance by offering the most convenient and eco-friendly car washing solutions available. We strive to exceed customer expectations with our reliable and professional services.
          </p>
          <h3>Our Vision</h3>
          <p>
            Our vision is to become the leading provider of doorstep car washing services in the region, known for our commitment to excellence and sustainability. We aim to set new standards in convenience and quality for vehicle care.
          </p>
          <h3>Our Values</h3>
          <ul>
            <li>Customer Satisfaction: We are dedicated to delivering exceptional service and ensuring customer satisfaction.</li>
            <li>Environmental Responsibility: We use eco-friendly products and methods to reduce our environmental impact.</li>
            <li>Integrity: We conduct our business with honesty and transparency, building trust with our clients.</li>
            <li>Innovation: We continuously seek to improve our services and adopt new technologies to stay ahead in the industry.</li>
          </ul>
        </div> */}
        <div className="team-section" >
      <h2 className='team-title' >Our Team</h2>
      <div className="team-container">
  <img src='./images/team.jpeg' className="background-image" alt="Team Background" />
  {teamMembers.map((member, index) => (
    <div key={index} className="team-member">
      <img src={member.image} alt={member.name} className="team-member-image" />
      <h3 className="team-member-name">{member.name}</h3>
      <p className="team-member-position">{member.position}</p>
      <p className="team-member-description">{member.description}</p>
    </div>
  ))}
</div>

    </div>
    <div className="">
      <section className="">        
        <div className='section'>
        <div className="background-image3"></div>
            
            <div className='container2'>
      <div ref={boxRef} className='box2'>   
      </div>
      
      <div className='para2'>
      <h3 className='team-title'>OUR EXPERTISE</h3>
            <p>
            Our team possesses extensive knowledge in managing a wide range of events, from corporate conferences to exhibitions, from brand launches to road shows, guaranteeing tailored solutions for every client. Extensively experienced in event management, brand activation, and unique knowledge of the Middle Eastern market puts us in a strong position to craft the perfect event.
            </p>
          </div>
          </div>
          </div>
          
          <div className="section">
            <div>
          <div className="background-image1"></div>
            
            <div className='container3'>
      <div className='box3'>   
      </div>
      
      <div className='para2'>
      <h3 className='team-title'>OUR PHILOSOPHY</h3>
            <p >
            An event is more than just a set of objectives and marketing requirements; it is a story. We help capture the essence of your story by coordinating all aspects of its execution to elevate it from a tale to an epic.
            </p>
          </div>
          </div>
          </div>
          </div>
          <div className="section">
          <div className="background-image2"></div>
            
            <div className='container2'>
      <div className='box2'>   
      </div>
      
      <div className='para2'>
      <h3 className='team-title'>OUR APPROACH</h3>
            <p>
            Our client-focused approach places the client at the center of our service model, ensuring their vision and goals are our top priority throughout the event planning process. Our leadership, with three decades of experience, brings unparalleled expertise to every event project, ensuring a seamless and successful execution.
            </p>
          </div>
          </div>
          
          </div>
        
      </section>
    </div>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;
