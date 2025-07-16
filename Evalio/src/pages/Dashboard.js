import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const evaluations = [
    { id: 1, title: 'Math Assessment', status: 'Active', responses: 24 },
    { id: 2, title: 'Programming Quiz', status: 'Draft', responses: 0 },
    { id: 3, title: 'Customer Feedback', status: 'Completed', responses: 156 },
  ];

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <button className="btn btn-primary">Create New Evaluation</button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Evaluations</h3>
            <p className="stat-number">12</p>
          </div>
          <div className="stat-card">
            <h3>Active Evaluations</h3>
            <p className="stat-number">5</p>
          </div>
          <div className="stat-card">
            <h3>Total Responses</h3>
            <p className="stat-number">1,248</p>
          </div>
          <div className="stat-card">
            <h3>This Month</h3>
            <p className="stat-number">89</p>
          </div>
        </div>

        <div className="evaluations-section">
          <h2>Recent Evaluations</h2>
          <div className="evaluations-list">
            {evaluations.map(evaluation => (
              <div key={evaluation.id} className="evaluation-card">
                <div className="evaluation-info">
                  <h3>{evaluation.title}</h3>
                  <span className={`status ${evaluation.status.toLowerCase()}`}>
                    {evaluation.status}
                  </span>
                </div>
                <div className="evaluation-stats">
                  <span>{evaluation.responses} responses</span>
                  <button className="btn btn-sm">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;