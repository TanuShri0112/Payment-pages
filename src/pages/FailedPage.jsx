import React from "react";
import { useNavigate } from "react-router-dom";
import "./FailedPage.css";

const FailedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="failed-page">
      <div className="failed-container">
        <div className="failed-card">
          <div className="failed-icon-wrapper">
            <div className="failed-icon-ring"></div>
            <div className="failed-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>

          <div className="failed-content">
            <h1 className="failed-title">Payment Failed</h1>
            <p className="failed-message">We couldn't process your payment</p>
          </div>

          <div className="error-box">
            <div className="error-icon-small">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="error-content">
              <h3 className="error-title">Transaction Declined</h3>
              <p className="error-description">
                Your payment was declined by your bank. This could be due to insufficient funds, incorrect card details, or security restrictions.
              </p>
            </div>
          </div>

          <div className="help-box">
            <h3 className="help-header">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              What you can do:
            </h3>
            <ul className="help-list">
              <li>Check your card details and try again</li>
              <li>Try a different payment method</li>
              <li>Contact your bank for more information</li>
              <li>Reach out to our support team if the issue persists</li>
            </ul>
          </div>

          <div className="failed-buttons">
            <button onClick={() => window.location.reload()} className="btn btn-danger">
              Try Again
            </button>
            <button onClick={() => navigate("/")} className="btn btn-secondary">
              Back to Dashboard
            </button>
          </div>

          <div className="support-link">
            <a href="#">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FailedPage;
