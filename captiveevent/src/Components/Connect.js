import React, { useState } from 'react'
import './Connect.css'
import ConnectForm from './ConnectForm'
import ContactNew from './ContactNew';

const Connect = () => {
    const [formData, setFormData] = useState({
        
        email: ''
        
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.email]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to a server)
        console.log(formData);
    };
  return (
    <div className="connect-container">
        
            <div className="connect-content">
                
                <div className="connect-text">
                <h2>Contact US</h2>
                    <p>Reach out to us, and let’s embark on the journey of crafting moments that will be remembered for a lifetime.</p>
                    <p>sales@captiveevents.com</p>
                    <p>+971-581732763</p>
                    <div className="newsletter-signup">
                        <p>To stay in touch, Sign Up to our Newsletter.</p>
                        <label htmlFor="email"></label>
                        <input
                            className="contact-form1"
                            placeholder="Email"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
               
                <ConnectForm/>
            </div>
        </div>

  )
}

export default Connect