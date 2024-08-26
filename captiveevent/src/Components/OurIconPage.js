import React, { useRef, useEffect } from 'react';
import OurIcon from './OurIcon';
import './OurIconPage.css';
import ServiceIcon from './ServiceIcon';
import { useScroll } from './ScrollContext';
import NewsSection from './NewsSection';

const OurIconPage = () => {
    const iconRefs = useRef([]);
    const { scrollToId } = useScroll();
    const items = [
        {
            id: 1,
            title: "Digital designing and theming",
            description: "Creating captivating and functional event stands tailored to the client's brand and objectives.",
            imageUrl: "../../serviceImg/engineer-analysing-cad-software-to-develop-video-g-2023-11-27-05-37-12-utc (1).jpg",
            moreDetails: {
                summary: "General summary for all media.",
                imageHeading:[
                    "Initial Design Consultation",
                    "Digital Mockup Creation",
                    "Feedback and Revisions",
                    "Final Design Implementation"
                ],
                imageSummaries: [
                    "Client meeting to gather requirements and preferences to initiate the design process.",
                    "Creation of digital mockups based on the gathered requirements and preferences.",
                    "Review of the digital mockups with the client, incorporating feedback, and making necessary revisions.",
                    "Implementation of the approved digital mockup into the final design solution."
                ],
                videoSummaries: [
                    "Summary for video 1",
                    "Summary for video 2"
                ],
                images: [
                    "../../serviceImg/concept.jpg",
                    "../../serviceImg/mockup.jpg",
                    "../../serviceImg/Graphic-designer1.jpg",
                    "../../serviceImg/digitalshowcase.jpg",
                ],
                videos: [
                   
                ]
            }
        },
        {id: 2, title: "Fabrication and Logistics", description: "Key Phases in Stand Designing & Fabrication Process with pecialised Logistics Solutions To Facilitate Seamless Executions.", imageUrl: "../../subservice/fabrication/professional-green-screen-studio-for-virtual-produ-2023-11-27-04-55-51-utc.jpeg",  moreDetails: {
            summary: "General summary for all media.",
            imageHeading:[
                "Initial Consultation",
                "3D Rendering",
                "Fabrication and Assembly",
                "On-site Setup and Teardown",
                "Transportation Arrangement & Coordination",
                "On-site Deployment",
                "On-Site Manpower & Event Support",
                "Cleanup, Retrieval & Dismantling Of Stands"
            ],
            imageSummaries: [
                "Discuss client's requirements, preferences, and design concepts and provide input from our design consultants.",
                "Create detailed 3D renderings of the stand design and relevant branding materials for client approval.",
                "Construct and assemble the stand using high-quality materials and skilled labor.",
                "Efficiently set up and dismantle the stand at the event location.",
                "Streamlining transportation logistics to ensure all event elements and attendees arrive on time. Our coordination efforts minimize delays and maximize efficiency.",
                "Expert teams deployed on-site to oversee every detail, ensuring smooth operations and immediate resolution of any issues. Our presence guarantees flawless event execution.",
                "Provision Of Manpower For Deployment And Service During Event Proceedings.",
                "Thorough post-event cleanup, efficient retrieval of materials, and careful dismantling of stands. We ensure the venue is returned to its original state swiftly and professionally.",
            ],
            videoSummaries: [
                "Summary for video 1",
                "Summary for video 2"
            ],
            images: [
                "../../subservice/fabrication/group-of-contemporary-factory-workers-discussing-f-2023-11-27-05-22-28-utc (1).jpg",
                "../../subservice/fabrication/two-architects-discussing-plans-closeup-2023-11-27-04-50-13-utc.jpg",
                "../../subservice/fabrication/open-stage-with-flat-screens-for-broadcasting-of-c-2023-11-27-04-58-17-utc.jpg",
                "../../subservice/fabrication/image-of-a-painting-compressor-car-service-2024-07-02-17-49-21-utc.jpg",
                "../../subservice/fabrication/transport.jpg",
                "../../subservice/fabrication/filmmaker-adjusting-camera-lighting-on-set-2024-06-03-20-06-18-utc.jpg",
                "../../subservice/fabrication/making-of-movie-video-in-big-production-studio-2023-11-27-05-02-42-utc.jpg",
                "../../subservice/fabrication/operator-setting-the-equipment-for-shooting-2023-11-27-05-05-02-utc.jpg",
            ],
            videos: [
               
            ]}},
        {id: 3, title: "A.V. equipment, lighting and furniture rental", description: "Providing top-quality A.V. equipment, lighting, and furniture rentals to enhance the ambiance and functionality of your event. Our rentals are tailored to meet your specific needs, ensuring a seamless and professional setup.", imageUrl: "../../subservice/av/dj-equipment-for-music-concert-in-club-2023-11-27-05-24-52-utc (1).jpg",  moreDetails: {
            summary: "General summary for all media.",
            imageHeading:[
                "Lights & Misc. Event Equipment",
                "Furniture & Misc. Decorative items",
                "Indoor & Outdoor Screen",
                "Digital Showcase"
            ],
            imageSummaries: [
                "we create an event concept and theme cantered around your brand philosophy to ensure maximal engagement and activation.",
                "Our team puts together a full digital mockup of the event including scaled 3D render, itemized list of material specs and stand features.",
                "The designers will create customized aesthetic and brand centric designs for the stand, merchandise and prints to boost brand activation.",
                "We curate a digital showcase designed to highlight your brand philosophy, key milestones and event objectives."
            ],
            videoSummaries: [
                "Summary for video 1",
                "Summary for video 2"
            ],
            images: [
                "../../subservice/av/modern-photo-studio-with-professional-equipment-b-2023-11-27-05-26-23-utc.jpg",
                "../../subservice/av/mariachi-musical-stage-with-lights-hats-and-instr-2024-01-19-18-55-37-utc.jpg",
                "../../subservice/av/3d-illustration-mockup-photo-frame-in-living-room-2023-11-27-05-04-17-utc.jpg",
                "../../subservice/av/hacker-successfully-breaking-website-2023-11-27-05-06-14-utc.jpg",
            ],
            videos: [
               
            ]}},
        {id: 4, title: "Digital service suite and social media services", description: "Comprehensive digital services, including website management and social media engagement, to amplify your event's reach and impact. We create a strong online presence that resonates with your audience.", imageUrl: "../../subservice/digital/businessman-working-in-office-2023-11-27-04-59-21-utc.jpg",  moreDetails: {
            summary: "General summary for all media.",
            imageHeading:[
                "Concept Creation",
                "Digital Mockup",
                "Graphic Design",
                "Digital Showcase"
            ],
            imageSummaries: [
                "we create an event concept and theme cantered around your brand philosophy to ensure maximal engagement and activation.",
                "Our team puts together a full digital mockup of the event including scaled 3D render, itemized list of material specs and stand features.",
                "The designers will create customized aesthetic and brand centric designs for the stand, merchandise and prints to boost brand activation.",
                "We curate a digital showcase designed to highlight your brand philosophy, key milestones and event objectives."
            ],
            videoSummaries: [
                "Summary for video 1",
                "Summary for video 2"
            ],
            images: [
                "../../subservice/digital/architectural-brilliance-2024-03-19-22-33-28-utc.jpg",
                "../../subservice/digital/architectural-sketch-designer-making-digital-build-2023-11-27-05-24-30-utc (1).jpg",
                "../../subservice/digital/editor-working-with-computer-at-office-2023-11-27-05-08-00-utc.jpg",
                "../../subservice/digital/industrial-engineer-woman-working-at-pc-with-two-m-2023-11-27-05-27-24-utc.jpg",
            ],
            videos: [
               
            ]}},
        // {id: 5, title: "Branding and Gift Sourcing", description: "Brief description", imageUrl: "../../serviceImg/Rectangle-31-5.png",  moreDetails: {
        //     summary: "General summary for all media.",
        //     imageHeading:[
        //         "Concept Creation",
        //         "Digital Mockup",
        //         "Graphic Design",
        //         "Digital Showcase"
        //     ],
        //     imageSummaries: [
        //         "we create an event concept and theme cantered around your brand philosophy to ensure maximal engagement and activation.",
        //         "Our team puts together a full digital mockup of the event including scaled 3D render, itemized list of material specs and stand features.",
        //         "The designers will create customized aesthetic and brand centric designs for the stand, merchandise and prints to boost brand activation.",
        //         "We curate a digital showcase designed to highlight your brand philosophy, key milestones and event objectives."
        //     ],
        //     videoSummaries: [
        //         "Summary for video 1",
        //         "Summary for video 2"
        //     ],
        //     images: [
        //         "../../subservice/concept.jpg",
        //         "../../subservice/mockup.jpg",
        //         "../../subservice/Graphic-designer1.jpg",
        //         "../../subservice/digitalshowcase.jpg",
        //     ],
        //     videos: [
               
        //     ]}},
        {id: 6, title: "Event photography, videography and livestreaming", description: "Capture every moment with our expert event photography, videography, and live streaming services. We provide high-quality visuals and real-time coverage to ensure your event is documented and shared seamlessly.", imageUrl: "../../subservice/shoot/video-camera-lens-2023-11-27-05-31-52-utc.jpg",  moreDetails: {
            summary: "General summary for all media.",
            imageHeading:[
                "Videography, Photography & Editing",
                "Audio-Visual Equipment",
                
            ],
            imageSummaries: [
                "Proffessional Videography, High-quality Photography, Post-Event Editing & Production, Drone Coverage, Creating Sizzle Reels",
                "Camera Equipment, Recording & Mixing Systems, Modular & Display LED, Camera Drones, Speaker Systems",
                
            ],
            videoSummaries: [
                "Summary for video 1",
                "Summary for video 2"
            ],
            images: [
                "../../subservice/shoot/professional-photographer-shooting-a-young-woman-2023-11-27-05-04-41-utc.jpg",
                "../../subservice/shoot/equipment.jpg",
                
            ],
            videos: [
               
            ]}},
    ];

    useEffect(() => {
        if (scrollToId) {
            const index = items.findIndex(item => item.id === scrollToId);
            if (index !== -1 && iconRefs.current[index]) {
                iconRefs.current[index].scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [scrollToId, items]);

    return (
        <>
            <ServiceIcon />

            <div className="our-icon-page">
                <div className="icon-list">
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            ref={(el) => (iconRefs.current[index] = el)}
                        >
                            <OurIcon
                                title={item.title}
                                description={item.description}
                                imageUrl={item.imageUrl}
                                moreDetails={item.moreDetails}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <NewsSection/>
        </>
    );
};

export default OurIconPage;