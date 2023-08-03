import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <div className="Hello">
        <Link to="/joa">
          <button type="button">JOA</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
