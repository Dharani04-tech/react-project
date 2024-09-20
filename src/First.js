import React from "react";
import "./App.css"; // Add your styles in this file
import TopLogo from './Assets/TopLogo.jpeg'
import Accounts from './Assets/Accounts.jpeg'
const First = () => {
  return (
    <div className="app">
      <header className="header">
        <img src={TopLogo} alt="Growfin Logo" className="logo" />
        <div className="buttons">
          <button className="btn">Schedule a Demo</button>
          <button className="btn-outline">Request Access</button>
        </div>
      </header>
      <section className="main-content">
        <h1>Real-Time Cash Application Software</h1>
        <p>
          Radically minimize manual intervention and achieve same-day closure with Growfin’s
          ML-powered Cash Application that delivers accurate, touchless posting.
        </p>
        <div className="actions">
          <button className="btn">Schedule a Demo</button>
          <button className="btn-outline">Request Access</button>
        </div>
      </section>
      <img src={Accounts} alt="Dashboard" className="dashboard-image" />
    </div>
  );
};

export default First;
