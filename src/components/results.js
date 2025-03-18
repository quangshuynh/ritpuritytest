import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../static/results.css';

import logo from '../assets/header.png';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { score = 100 } = location.state || {};

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'My RIT Purity Test Score',
          text: `I got a RIT Purity Score of ${score} on the RIT Purity Test!`,
          url: window.location.href, 
        })
        .then(() => console.log('Shared successfully!'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      alert(`I got a RIT Purity Score of ${score} on the RIT Purity Test!`);
    }
  };

  return (
    <div className="results-container">
      <img alt="The Official RIT Purity Test" width="600" height="169" decoding="async" className="w-full max-w-[600px] h-auto px-4 sm:px-0 mx-auto mb-8" style={{ color: 'transparent', minWidth: '280px', objectFit: 'contain' }} src={logo} />
      <h2>Your RIT Purity Score: {score}</h2>
      <p>Do you even go to RIT? 🤔</p>

      <div className="button-group">
        <button className="button2" onClick={handleShare}>
          Share Result
        </button>
        <button className="button-secondary" onClick={() => navigate('/')}>
          Take the test again
        </button>
      </div>
    </div>
  );
};

export default Results;
