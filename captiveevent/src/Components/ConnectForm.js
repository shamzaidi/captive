import React, { useState } from 'react';
import './ConnectForm.css'; // Import the CSS file for styling
import axios from 'axios';

const ConnectForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to a server)
        let res = axios.post("http://localhost:5000/query", formData)

        console.log(res);
        setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
        });
       
    };
    
    
    return (
        <section >
            <div className="form-container">
            <div className="form-header" >
            <h3 >MAKE A QUERY</h3>
            <p>Get in Touch with Us</p>
          </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div >
                    <div className="form-group" >
                        <label htmlFor="name"></label>
                        <input 
                        placeholder='Name'
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="phone"></label>
                        <input 
                        placeholder='Phone Number'
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input 
                            type="text" 
                            id="address" 
                            name="address" 
                            value={formData.address} 
                            onChange={handleChange} 
                            required 
                        />
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input 
                        placeholder='Email'
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="message"></label>
                        <textarea 
                        placeholder='Message'
                            id="message" 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            rows="5" 
                            required 
                        ></textarea>
                    </div>
                    <button type="submit" className="form-button">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default ConnectForm;
