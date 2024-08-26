import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactNew.css'; // Import the CSS file

const ContactNew = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/admin/Setting');
  };

  return (
    
      <div className="login-form">
        <form>
          <div className="form-header">
            <h3>लॉग इन करें</h3>
            <p>अपना मोबाइल नंबर और पासवर्ड भरे</p>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="मोबाइल नंबर डाले"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-input"
              placeholder="पासवर्ड डाले"
            />
          </div>
          <div className="form-check">
            <input type="checkbox" id="policy" />
            <label htmlFor="policy">मुझे नियम और शर्तें स्वीकार्य हैं</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="rememberme" />
            <label htmlFor="rememberme">कृपया मुझे याद रखे</label>
          </div>
          <button className="form-button" onClick={handleClick}>
            प्रवेश करे
          </button>
        </form>
      </div>
    
  );
};

export default ContactNew;
