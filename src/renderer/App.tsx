import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import './App.css';
import JOAPage from './JOAPage';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/JOA" element={<JOAPage />} />
      </Routes>
    </Router>
  );
}
