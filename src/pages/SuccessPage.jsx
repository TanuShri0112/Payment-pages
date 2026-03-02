import React from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessPage.css";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-card">
          <div className="success-icon-wrapper">
            <div className="success-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <div className="success-content">
            <h1 className="success-title">Payment Successful</h1>
            <p className="success-message">
              Your payment has been processed successfully. Thank you for your purchase!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
