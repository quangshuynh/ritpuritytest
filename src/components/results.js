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
      navigator.share({
          title: 'My RIT Purity Test Score',
          text: `I got a RIT Purity Score of ${score} on the RIT Purity Test!`,
          url: "https://ritpuritytest.vercel.app/"
        })
        .then(() => console.log('Shared successfully!'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      alert(`I got a RIT Purity Score of ${score} on the RIT Purity Test!`);
    }
  };

  const getMessage = (score) => {
    if (score >= 90) {
      return "Do you even go to RIT? 🤔";
    } else if (score >= 80) {
      return "You're still quite pure. Are you sure you're not a freshman?";
    } else if (score >= 70) {
      return "You've had a few typical RIT experiences. Keep exploring!";
    } else if (score >= 60) {
      return "You're well on your way to a well-rounded RIT career.";
    } else if (score >= 50) {
      return "You're living the Tiger life!";
    } else if (score >= 40) {
      return "You might be getting a bit wild, but hey, it's college!";
    } else if (score >= 30) {
      return "You're definitely making the most of your time at RIT.";
    } else if (score >= 20) {
      return "You might need to slow down a bit. This is RIT, not a party school... or is it?";
    } else if (score >= 10) {
      return "You're basically a campus legend at this point!";
    } else {
      return "Your RIT journey is truly something else! Are you even human? 🤯";
    }
  };

  return (
    <div className="results-container">
      <img alt="The Official RIT Purity Test" width="600" height="169" decoding="async" className="w-full max-w-[600px] h-auto px-4 sm:px-0 mx-auto mb-8" style={{ color: 'transparent', minWidth: '280px', objectFit: 'contain' }} src={logo} />        
      <h2>Your RIT Purity Score: {score}</h2>
      <p>{getMessage(score)}</p>

      <div className="button-group">
        <button className="button2" onClick={handleShare}>
          Share With Friends
        </button>
        <button className="button-secondary" onClick={() => navigate('/')}>
          Take the test again
        </button>
      </div>
    </div>
  );
};

export default Results;
