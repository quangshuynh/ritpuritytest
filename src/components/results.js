import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score ?? 100;

  return (
    <div className="results-container" style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Your Purity Score</h1>
      <p>Your purity score is: {score}</p>
      <button className="button" onClick={() => navigate("/")}>
        Take the test again
      </button>
    </div>
  );
};

export default Results;
