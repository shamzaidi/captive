// src/Components/NewsSection.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import './NewsSection.css';

const newsData = [
    { id: 1, title: 'Corporate Conferences', description: 'Large-scale meetings or seminars organized by companies to discuss business strategies, industry trends, or professional development.', imageUrl: "../../eventtype/Corporate-Events.jpeg", link: '#', bgColor: '#eb4034' },
    { id: 2, title: 'Product Launches', description: 'Events designed to introduce a new product or service to the market.', imageUrl: "../../eventtype/product-launch.jpg", link: '#' , bgColor: 'white'},
    { id: 3, title: 'Weddings', description: 'Personal celebrations of marriage, often involving detailed planning of the ceremony and reception.', imageUrl: "../../eventtype/wedding.jpg", link: '#' , bgColor: '#34eb8f'},
    { id: 4, title: 'Trade Shows', description: 'Large exhibitions where businesses showcase their products or services to potential clients and partners.', imageUrl:  "../../eventtype/trade.jpg", link: '#' , bgColor: '#3498eb'},
    { id: 5, title: 'Charity Galas', description: 'Formal events aimed at raising funds and awareness for a cause.', imageUrl: "../../eventtype/charity.jpg", link: '#' , bgColor: '#f8b400'},
    { id: 6, title: 'Concerts and Festivals', description: 'Music or arts events that can range from small local gigs to large-scale festivals. ', imageUrl: "../../eventtype/dj.jpg", link: '#' , bgColor: '#8e44ad'},
    { id: 7, title: 'Sporting Events', description: 'Competitions or matches, such as marathons, tournaments, or leagues.', imageUrl: "../../eventtype/sports.jpg", link: '#' , bgColor: '#f8b400'},
    { id: 8, title: 'Expos', description: 'Large-scale events where various industries or sectors come together to showcase their innovations, products, and services.', imageUrl: "../../eventtype/expo.jpg", link: '#' , bgColor: '#e74c3c'},
];

const NewsSection = () => {
    return (
        <section className="news-section">
            <div className="news-container">
                <div className="news-header">
                    <h2>Event Types</h2>
                </div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2} // Show 2 items per row
                    grid={{
                        rows: 2, // Display 2 rows
                        fill: 'row',
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Grid, Navigation, Pagination]}
                >
                    {newsData.map((news) => (
                        <SwiperSlide key={news.id}>
                            <div className="news-card" style={{ backgroundColor: news.bgColor }}>
                                <img src={news.imageUrl} alt={news.title} />
                                <div className="news-content">
                                    <h3>{news.title}</h3>
                                    <p>{news.description}</p>
                                    <a href={news.link} className="read-more">Read More</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default NewsSection;

