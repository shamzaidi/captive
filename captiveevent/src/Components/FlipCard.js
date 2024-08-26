import React from 'react';
import './FlipCard.css'; // Import the CSS file for styling

const FlipCard = ({ img, title, description }) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={img} alt={title} />
                </div>
                <div className="flip-card-back">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
