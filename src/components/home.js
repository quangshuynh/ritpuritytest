import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/header.png';

const Home = () => {
  const initialChecks = new Array(100).fill(false);
  const [checks, setChecks] = useState(initialChecks);
  const navigate = useNavigate();

  const handleCheck = (index) => {
    const newChecks = [...checks];
    newChecks[index] = !newChecks[index];
    setChecks(newChecks);
  };

  const handleCalculateAndRedirect = () => {
    const checkedCount = checks.filter(Boolean).length;
    const score = 100 - checkedCount; 
    navigate("/results", { state: { score } });
  };

  const questions = [
    'Current student at RIT?',
    'Thought about dropping out of school?',
    'Applied to (or in) graduate school at RIT?',
  ];

  return (
    <div className="App">
      <div className="content">
        <main className="min-h-screen py-8">
          <div className="content-container">
            <div className="title-container">
              <img
                alt="The Official RIT Purity Test"
                width="600"
                height="100"
                decoding="async"
                className="w-full max-w-[600px] h-auto px-4 sm:px-0 mx-auto mb-8"
                style={{ color: 'transparent', minWidth: '280px', objectFit: 'contain' }}
                src={logo}
              />
            </div>
            <div className="description">
              The first-ever RIT Purity Test! Designed as a fun and voluntary way for RIT students to bond and reflect on their experiences throughout their time at Rochester Institute of Technology.
              This test offers a unique opportunity to track personal growth and share memories with fellow Tigers.
            </div>
            <p className="caution">
              Caution: This is not a bucket list. You are beyond cooked if you complete all the items on this list.
            </p>
            <p className="instructions">
                Click on every item you have done. Your purity score will be calculated at the end.
            </p>
            <div className="question-list">
              {questions.map((question, index) => (
                <div key={index} className="question-item">
                  <input
                    type="checkbox"
                    id={`question-${index}`}
                    checked={checks[index]}
                    onChange={() => handleCheck(index)}
                  />
                  <label htmlFor={`question-${index}`}>{question}</label>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button className="button" onClick={handleCalculateAndRedirect}>
                Calculate My Score
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
