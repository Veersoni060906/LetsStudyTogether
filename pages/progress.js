// pages/progress.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';

const ProgressPage = () => (
  <div>
    <Navbar />
    <div style={{ padding: '20px' }}>
      <h1>Progress Tracking</h1>
      <p>Track your study progress over time!</p>
    </div>
    <Footer />
  </div>
);

export default ProgressPage;
