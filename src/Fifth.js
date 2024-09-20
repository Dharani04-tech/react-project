import React from 'react';
import './fifth.css';

const CashApplicationFeatures = () => {
  return (
    <div className="cash-application-container">
      {/* Heading Section */}
      <div className="heading-section">
        <h1>Secure, Seamless, and Scalable Cash Application</h1>
        <p>Integrate seamlessly with all your banks and ERP, and keep your auditors happy with state-of-the-art compliance and security measures.</p>
      </div>

      {/* Feature Section */}
      <div className="features-section">
        <div className="feature-item">
          <h3>Tight ERP Integration</h3>
          <p>Keep your books accurate and up-to-date, and the auditors at bay with a seamless 2-way integration with your ERP.</p>
          <div className="erp-icons">
            <img src="oracle-logo.png" alt="Oracle NetSuite" /> {/* Replace with actual icons */}
            <img src="sap-logo.png" alt="SAP" />
            <img src="quickbooks-logo.png" alt="QuickBooks" />
          </div>
        </div>

        <div className="feature-item">
          <h3>Unmatched Security</h3>
          <p>Stay confident and compliant with software that’s approved by the world’s most trusted certifications.</p>
          <div className="security-icons">
            <img src="soc2-logo.png" alt="SOC 2" />
            <img src="gdpr-logo.png" alt="GDPR" />
          </div>
        </div>

        <div className="feature-item">
          <h3>Wide Bank Coverage</h3>
          <p>Out-of-the-box connection to all your bank accounts across geographies to read payments in real-time.</p>
          <div className="bank-icons">
            <img src="bofa-logo.png" alt="Bank of America" />
            <img src="jpmorgan-logo.png" alt="JPMorgan Chase" />
            <img src="wellsfargo-logo.png" alt="Wells Fargo" />
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2>Embrace the Future of Cash Application Today</h2>
        <div className="cta-buttons">
          <button className="cta-button demo-button">Schedule a Demo</button>
          <button className="cta-button access-button">Request Access</button>
        </div>
      </div>
    </div>
  );
};

export default CashApplicationFeatures;
