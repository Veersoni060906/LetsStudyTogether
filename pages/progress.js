// pages/progress.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';

const ProgressPage = () => (
  <div>
    <Navbar />
    <div style={{ padding: '20px' }}>
      <h1>Progress Tracking</h1>
      <p>Stay motivated and see how far you've come.

Our smart progress tracking tools help you monitor your learning journey day by day, week by week. Visualize your achievements, identify patterns in your study habits, and set goals you can actually reach. Whether you’re preparing for exams, mastering a new skill, or just staying consistent—your progress is always within sight.
Because growth is easier to measure when you can see it.</p>
    </div>
    <Footer />
  </div>
);

export default ProgressPage;
