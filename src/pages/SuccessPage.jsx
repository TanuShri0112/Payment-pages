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
            <div className="success-icon-ring"></div>
            <div className="success-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="success-sparkle sparkle-1"></div>
            <div className="success-sparkle sparkle-2"></div>
          </div>

          <div className="success-content">
            <h1 className="success-title">Payment Successful!</h1>
            <p className="success-message">Your transaction has been completed</p>
          </div>

          <div className="success-details">
            <div className="detail-row">
              <span className="detail-label">Amount</span>
              <span className="detail-value amount">$99.00</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Transaction ID</span>
              <span className="detail-value transaction-id">
                TXN{Math.random().toString().slice(2, 11)}
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Date</span>
              <span className="detail-value">
                {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Status</span>
              <span className="status-value">
                <span className="status-dot"></span>
                Completed
              </span>
            </div>
          </div>

          <div className="success-buttons">
            <button onClick={() => navigate("/")} className="btn btn-primary">
              Back to Dashboard
            </button>
            <button className="btn btn-secondary">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
