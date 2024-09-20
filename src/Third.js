import React from "react";
import "./third.css"; // Add your custom styles in this file

const CashApplication = () => {
  return (
    <div className="cash-application-section">
      <h2>
        <span>Experience</span> Cash Application Perfection
      </h2>
      <p>
        Achieve touchless cash application to enable faster and accurate financial
        reporting for your business and a better experience for your customers.
      </p>
      <div className="features">
        <div className="feature">
          <span className="icon">💸</span>
          <h3>Automate Cash Application</h3>
          <p>
            Auto-match payments and extract remittances from unstructured data, and achieve straight-through posting.
          </p>
        </div>
        <div className="feature">
          <span className="icon">✔️</span>
          <h3>Achieve Exceptional Accuracy</h3>
          <p>
            Ensure precise payment matching, even with partial or overpayments, to reduce posting errors and compliance nightmares.
          </p>
        </div>
        <div className="feature">
          <span className="icon">📊</span>
          <h3>Deliver Real-time Visibility</h3>
          <p>
            Gain real-time visibility into cash flow and AR aging to optimize collection strategies and improve forecasting accuracy.
          </p>
        </div>
        <div className="feature">
          <span className="icon">🌟</span>
          <h3>Enhance Customer Experience</h3>
          <p>
            Avoid disputes, incorrect follow-ups and improve customer satisfaction with real-time, touchless cash applications.
          </p>
        </div>
      </div>
      <div className="action-buttons">
        <button className="btn-primary">Schedule a Demo</button>
        <button className="btn-outline">Request Access</button>
      </div>
    </div>
  );
};

export default CashApplication;
