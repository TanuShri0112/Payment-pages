import React from "react";
import { useNavigate } from "react-router-dom";
import "./CancelledPage.css";

const CancelledPage = () => {
  const navigate = useNavigate();

  return (
    <div className="cancelled-page">
      <div className="cancelled-container">
        <div className="cancelled-card">
          <div className="cancelled-icon-wrapper">
            <div className="cancelled-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>

          <div className="cancelled-content">
            <h1 className="cancelled-title">Payment Cancelled</h1>
            <p className="cancelled-message">
              Your payment has been cancelled. You can try again or return to the dashboard.
            </p>
          </div>

          <div className="cancelled-buttons">
            <button onClick={() => navigate("/")} className="btn btn-primary">
              Back to Dashboard
            </button>
            <button className="btn btn-secondary">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelledPage;
