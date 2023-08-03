// JOAComponent.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './JOAPage.css'; // Import your custom CSS file for styling
import Dice from 'components/dice/DiceJoa.jsx';

const JOAComponent = () => {


  return (
    <div className="container">
      {/* Duplicated horizontal section at the top */}
      <div className="horizontal-section">
        
          <Dice/>

      </div>

      {/* First vertical section */}
      <div className="vertical-section">
        <h2>Section 1</h2>
        <p>Content for the first vertical section.</p>
      </div>

      {/* Second vertical section */}
      <div className="vertical-section">
        <h2>Section 2</h2>
        <p>Content for the second vertical section.</p>
      </div>

      {/* Third vertical section */}
      <div className="vertical-section">
        <h2>Section 3</h2>
        <p>Content for the third vertical section.</p>
      </div>

      {/* Duplicated horizontal section at the bottom */}
      <div className="horizontal-section">
        <h2>Section 5 (Duplicated)</h2>
        <p>Content for the bottom horizontal section (Duplicated).</p>
      </div>

      {/* Go Back button */}
      <div>
        <Link to="/">
          <button type="button">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default JOAComponent;
