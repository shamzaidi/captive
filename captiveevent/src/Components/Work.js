import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import './Work.css'; // Import your custom CSS

const Work = () => {
    const workItems = [
        {
            img: 'https://captiveevents.com/wp-content/uploads/2023/12/nihal-demirci-erenay-jKtQTsK0aFA-unsplash-1.png',
            title: 'Project 1',
            description: 'Step into a world where art, music, and creativity converge to create an immersive experience like no other. Captive Events proudly presents "Harmony in Hues," a spectacular celebration of artistic expression, where every brushstroke tells a story and every note creates a melody of emotions.',
            link: '#'
        },
        {
            img: './images/aesthetic1.jpg',
            title: 'Project 2',
            description: 'Step into a world where art, music, and creativity converge to create an immersive experience like no other. Captive Events proudly presents "Harmony in Hues," a spectacular celebration of artistic expression, where every brushstroke tells a story and every note creates a melody of emotions.',
            link: '#'
        },
        {
            img: './images/aesthetic2.jpg',
            title: 'Project 3',
            description: 'Step into a world where art, music, and creativity converge to create an immersive experience like no other. Captive Events proudly presents "Harmony in Hues," a spectacular celebration of artistic expression, where every brushstroke tells a story and every note creates a melody of emotions.',
            link: '#'
        }
        // Add more projects as needed
    ];

    return (
        <section className="work">
          
            <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                transitionTime={1000}
            >
                {workItems.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <img src={item.img} alt={item.title} />
                        <div className="carousel-overlay">
                            <div className='leftSide'>
                            <h3 className="carousel-title">OUR WORK</h3>
                            <p className="carousel-description">{item.description}</p>
                            <a  className="banner-btn" style={{width:"10px"}}>View Project &#8594;</a>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    );
};

export default Work;
