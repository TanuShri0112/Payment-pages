import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Payment Dashboard</h1>
          <p className="dashboard-subtitle">Choose a payment status to preview</p>
        </div>
        
        <div className="dashboard-cards">
          <button onClick={() => navigate("/success")} className="dashboard-card success">
            <div className="card-content">
              <div className="card-icon success">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="card-title">Success Page</h2>
              <p className="card-description">Payment completed successfully</p>
              <div className="card-arrow">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </button>
          
          <button onClick={() => navigate("/failed")} className="dashboard-card failed">
            <div className="card-content">
              <div className="card-icon failed">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h2 className="card-title">Failed Page</h2>
              <p className="card-description">Payment declined or failed</p>
              <div className="card-arrow">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

