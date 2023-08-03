import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';

const LandingPage = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <Link to="/joa">
          <button type="button">JOA</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
