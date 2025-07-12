import React, { useState } from 'react';
import './AirFryerForm.css';

const AirFryerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    costGuess: '',
    spidrPin: ''
  });

  const [showPin, setShowPin] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for Spidr PIN formatting
    if (name === 'spidrPin') {
      const cleaned = value.replace(/\D/g, '').slice(0, 16);
      const formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1-');
      setFormData(prev => ({
        ...prev,
        [name]: formatted
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const togglePinVisibility = () => {
    setShowPin(!showPin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Thank you for your interest! Check the console for form data.');
  };

  return (
    <div className="air-fryer-form-container">
      <div className="form-wrapper">
        <h2 className="form-title">INTERESTED IN OUR AIR FRYER?</h2>
        <p className="form-subtitle">Join the waitlist and be the first to know when it launches.</p>
        
        <form onSubmit={handleSubmit} className="interest-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">FIRST NAME</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName">LAST NAME</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phoneNumber">PHONE NUMBER</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="form-input"
                placeholder="(555) 123-4567"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="costGuess">GUESS THE COST</label>
            <div className="cost-input-wrapper">
              <span className="currency-symbol">$</span>
              <input
                type="number"
                id="costGuess"
                name="costGuess"
                value={formData.costGuess}
                onChange={handleInputChange}
                required
                className="form-input cost-input"
                placeholder="0.00"
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="spidrPin">SECRET 16-DIGIT SPIDR PIN</label>
            <div className="pin-input-wrapper">
              <input
                type={showPin ? "text" : "password"}
                id="spidrPin"
                name="spidrPin"
                value={formData.spidrPin}
                onChange={handleInputChange}
                required
                className="form-input pin-input"
                placeholder="####-####-####-####"
                maxLength="19"
              />
              <button
                type="button"
                className="pin-toggle"
                onClick={togglePinVisibility}
                aria-label={showPin ? "Hide PIN" : "Show PIN"}
              >
                {showPin ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          <button type="submit" className="submit-button">
            JOIN WAITLIST
          </button>
        </form>
      </div>
    </div>
  );
};

export default AirFryerForm; 