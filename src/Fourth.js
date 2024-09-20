import React from 'react';
import './fourth.css'; // Add styles in your App.css or inline
import FlowChart from './Assets/FlowChart.jpeg'
const CashApplicationProcess = () => {
  return (
    <div className="cash-application-container">
      {/* Left Section */}
      <div className="text-section">
        <h1>Transform Your Cash Application Process</h1>
        <p className="description">
          Achieve touchless posting for 90% of payments while still retaining control over exceptions that need a little extra human touch.
        </p>
        
        <div className="tabs">
          <span className="active-tab">Instant Capture</span>
          <span>Accurate Match</span>
          <span>Remittance Extraction</span>
          <span>Exceptions Handling</span>
          <span>Touchless Posting</span>
        </div>
        
        <h2>Instantly Capture All Incoming Payments</h2>
        <p>
          Still logging into each of your bank accounts and wrestling with spreadsheets? Growfin integrates with your bank accounts to extract every incoming transaction in real-time. It's almost magic.
        </p>

        <div className="info">
          <div className="info-item">
            <i className="bank-icon"></i> {/* Add an icon here */}
            <p>Integrates with all major banks</p>
          </div>
          <div className="info-item">
            <i className="check-icon"></i> {/* Add an icon here */}
            <p><strong>100%</strong> Identification of all transactions</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="image-section">
        <div className="circle">
          <img src={FlowChart} alt="Growfin" className="growfin-logo" /> {/* Replace with actual logo */}
          <div className="banks">
            {/* <img src="bank1-icon.png" alt="Bank 1" /> Add bank icons */}
            {/* <img src="bank2-icon.png" alt="Bank 2" />
            <img src="bank3-icon.png" alt="Bank 3" />
            <img src="bank4-icon.png" alt="Bank 4" />
            <img src="bank5-icon.png" alt="Bank 5" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashApplicationProcess;
