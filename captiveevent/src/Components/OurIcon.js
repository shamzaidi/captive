import React, { useState } from 'react';
import './OurIconCard.css';

const OurIcon = ({ title, description, imageUrl, moreDetails }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className={`icon-card ${isExpanded ? 'expanded' : ''}`} style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="icon-card-overlay">
            <img src={imageUrl} alt={title} className="icon-card-image" />
            <div className="icon-card-details">
                <h3 className="icon-card-title">{title}</h3>
                <p className="icon-card-description">{description}</p>
                <button className="icon-card-button" onClick={toggleExpand}>
                    {isExpanded ? 'Close' : 'View Details'}
                </button>
                {isExpanded && moreDetails && (
    <div className="icon-card-more-details">
        <div className="icon-card-media">
            {moreDetails.images && moreDetails.images.map((imgSrc, index) => (
                <div key={index} className="icon-card-media-item">
                    <img src={imgSrc} alt={`More ${index}`} className="icon-card-extra-image" />
                    <div className='d-flex'> 
                    <h1>
                    {moreDetails.imageHeading && moreDetails.imageHeading[index]
                            ? moreDetails.imageHeading[index]
                            : moreDetails.summary}
                    </h1>
                    <p className="icon-card-media-brief">
                        {moreDetails.imageSummaries && moreDetails.imageSummaries[index]
                            ? moreDetails.imageSummaries[index]
                            : moreDetails.summary}
                    </p>
                </div>
                </div>
            ))}
            {moreDetails.videos && moreDetails.videos.map((videoSrc, index) => (
                <div key={index} className="icon-card-media-item">
                    <video src={videoSrc} controls className="icon-card-extra-video" />
                    <p className="icon-card-media-brief">
                        {moreDetails.videoSummaries && moreDetails.videoSummaries[index]
                            ? moreDetails.videoSummaries[index]
                            : moreDetails.summary}
                    </p>
                </div>
            ))}
        </div>
    </div>
)}

            </div>
        </div>
    </div>
);
};


export default OurIcon;
