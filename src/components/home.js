import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../static/home.css';

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
    'On an RIT scholarship?',
    'Stayed at a dorm freshman year?',
    'Slept on campus during finals week?',
    'Camped a study room (6+ hours)?',
    'Forgot to return a book from Wallace Library?',
    'Used the campus bathrooms and found them to be dirty?',
    'Complained about the smell in Golisano?',
    'Complained about campus construction?',
    'Ever lost your RIT ID?',
    'Had to get a replacement RIT ID?',
    'Smoked on campus?',
    'Drank on campus?',
    'Vaped in class?',
    'Went to the Global Village for a meal?',
    'Ordered food through Grubhub at RIT?',
    'Cheated on an exam?',
    'Used AI tools like ChatGPT to complete homework?',
    'Been late to class?',
    'Been called out by the professor for being late?',
    'Skipped a class?',
    'Been caught skipping class by a professor?',
    'Skipped a whole class for the whole semester?',
    'Attended less than 5 lectures through a term?',
    'Turned in an assignment at 11:59?',
    'Pulled an all-nighter to finish a project or study for an exam?',
    'Dropped a class after the first week?',
    'Changed your major?',
    'Switched from CS to IT/IS?',
    'Had to carry a group project?',
    'Been the one that had to be carried in a group project?',
    'Placed a review on Rate My Professor?',
    'Failed a class?',
    'Retook a class?',
    'Went to class drunk/high?',
    'Studied at Golisano?',
    'Studied at Saunders?',
    'Studied at Wallace Library?',
    'Had a class later than 7pm?',
    'Had an 8am class?',
    'Joined a club or organization on campus?',
    'Attended a club meeting or event?',
    'Held a leadership position in a club?',
    'Participated in a campus-wide event like Imagine RIT?',
    'Attended a guest lecture or speaker series?',
    'Been to a career fair/job expo on campus?',
    'Got a job from the career fair?',
    'Been part of student government or a student council?',
    'Organized an event on campus?',
    'Received an award or recognition from a club or the university?',
    'Attended an RIT party?',
    'Been to an RIT frat party?',
    'Rushed for a fraternity or sorority?',
    'In a fraternity or sorority?',
    'Been to an RIT hockey game?',
    'Talked trash about RIT to another RIT student?',
    'Held hands with someone on campus?',
    'Kissed someone on campus?',
    'Hooked up on campus?',
    'Been in a relationship?',
    'Been in a relationship with a TA?',
    'Been in a relationship with a professor?',
    'Been to a Phi Kappa Psi party?',
    'Been to a Sigma Chi party?',
    'Commute to campus via car?',
    'Have a parking pass?',
    'Arrived late to class because of parking?',
    'Got a parking ticket?',
    'Got more than 5 parking tickets?',
    'Posted on the RIT subreddit?',
    'Follow @rit_afterdark?',
    'Ate at the dining hall?',
    'Ate dining hall breakfast?',
    'Got sick from the dining hall?',
    'Worked out at the RIT gym?',
    'Participated in an intramural sports team?',
    'Listened to a concert at the RIT?',
    'Performed at an RIT open mic event?',
    'Called RIT the "MIT of the North"?',
    'Painted the Free Speech Rock?',
    'Done the RIT paw sign?',
    'Taken a picture with RITchie the Tiger?',
    'Taken a professional photo at the Infinity Quad?',
    'Complained about the lack of a football team at RIT?',
    'Wondered who wears the RITchie costume?',
    'Seen a furry on campus?',
    'Lived at Park Point',
    'Hosted a party at Park Point?',
    'Waited 1+ week for maintenance?',
    'Got in trouble with your RA?',
    'Lived in University Commons?',
    'Threw a party in University Commons?',
    'Got a party shut down?',
    'Been to a University Commons party?',
    'Been to MacGregor\'s Grill & Tap Room',
    'Drank at MacGregor\'s Grill & Tap Room',
    'Kicked out by your roommate because they were getting active ;)?',
    'Kicked your roommate out because YOU were getting active ;)?',
];

  return (
    <div className="App">
      <div className="content">
        <main className="min-h-screen py-8">
          <div className="content-container">
            <div className="title-container">
              <img alt="The Official RIT Purity Test" width="1182" height="169" decoding="async" className="w-full max-w-[600px] h-auto px-4 sm:px-0 mx-auto mb-8" style={{ color: 'transparent', minWidth: '280px', objectFit: 'contain' }} src={logo} />
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
                    <span className="question-number">{index + 1}.</span>
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
