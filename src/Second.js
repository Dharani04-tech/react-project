import React from "react";
import "./second.css"; 
import mamphoto from "./Assets/mamphoto.jpeg"
const CustomerAchievements = () => {
  return (
    <div className="customer-achievements">
      <h2>What our Early Customers have Already Achieved</h2>
      <div className="content">
        <div className="customer-info">
          <img src={mamphoto} alt="Customer" className="customer-img" />
        </div>
        <div className="achievements">
          <ul>
            <li>
              <span className="icon">📅</span>
              <span className="stat">95%</span>
              <span>Increase in same-day invoice posting</span>
            </li>
            <li>
              <span className="icon">🔁</span>
              <span className="stat">70%</span>
              <span>Reduction in posting delays and errors</span>
            </li>
            <li>
              <span className="icon">⚙️</span>
              <span className="stat">75%</span>
              <span>Increase in automation for manual Cash Application</span>
            </li>
            <li>
              <span className="icon">📈</span>
              <span className="stat">100%</span>
              <span>Improvement in customer communication & experience</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="logos">
        <img src="mindtickle-logo.png" alt="Mindtickle" />
        <img src="locus-logo.png" alt="Locus" />
        <img src="letstransport-logo.png" alt="Lets Transport" />
      </div>
      <div className="testimonial">
        <blockquote>
          “Growfin’s Cash Application has helped us streamline the entire cash application process with less manual intervention & timely posting of payments."
        </blockquote>
        <p>- Rohit Namboodiri, AR Manager, Locus</p>
      </div>
    </div>
  );
};

export default CustomerAchievements;
