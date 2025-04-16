// pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px;
  text-align: center;
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Welcome to Let's Study Together!</h1>
        <p>Join a vibrant community where learning, growing, and creating together is effortless.
Whether you're working on a personal project, studying with friends, or building something big—our platform gives you the tools to stay connected, monitor your goals, and collaborate in real time.
No matter where you are in your journey, we help you stay on track and never go it alone.</p>
      </Container>
      <Footer />
    </>
  );
}