import React from 'react';
import './Contact.css';
import ConnectForm from './ConnectForm';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-page">
     
     
      <div className="contact-container"style={{padding:"6%"}}>
        <div className="contact-info">
          <h2>Reach Out for Assistance</h2>
          <p><strong>Address:</strong> 123 Event Street, City, Country</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Email:</strong> info@example.com</p>
          <h3>Follow Us</h3>
          <div className="social-icons">
                    <a href="https://www.facebook.com"><FaFacebookF /></a>
                    <a href="https://www.twitter.com"><FaTwitter /></a>
                    <a href="https://www.instagram.com"><FaInstagram /></a>
                    <a href="https://www.linkedin.com"><FaLinkedin /></a>
                </div>
        </div>
        <div>
        <ConnectForm  />
        </div>
        {/* <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div> */}
      </div>

      <div className="contact-map">
      <h1>OUR LOCATION</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828361546!2d54.89780997457342!3d25.076280444129598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1723099201558!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
