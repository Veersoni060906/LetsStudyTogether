// pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Link from 'next/link';

// Styled Components for the Home Page
const PageContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f4f6f9;
`;

const HeroSection = styled.section`
  background-color:rgb(10, 30, 52);
  color: white;
  padding: 60px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  color: red;
`;

const HeroDescription = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  flex-wrap: wrap;
`;

const FeatureCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  margin: 10px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.div`
  font-size: 40px;
  margin-bottom: 15px;
  color: #0070f3;
`;

const FeatureTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const CTAButton = styled(Link)`
  background-color:rgb(3, 48, 104);
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  margin-top: 30px;
  display: inline-block;
  &:hover {
    background-color: #005bb5;
  }
`;

const Home = () => {
  return (
    <div>
      <Navbar />
      <PageContainer>
        {/* Hero Section */}
        <HeroSection>
          <HeroTitle>Welcome to Let’s Study Together!</HeroTitle>
          <HeroDescription>
            A collaborative platform where students can create study groups, track progress, and share resources to enhance learning together. Join a group today and start studying smarter, not harder.
          </HeroDescription>
          <CTAButton href="/study-groups">Join a Study Group</CTAButton>
        </HeroSection>

        {/* Features Section */}
        <FeaturesSection>
          <FeatureCard>
            <FeatureIcon>📚</FeatureIcon>
            <FeatureTitle>Study Groups</FeatureTitle>
            <FeatureDescription>
              Create and join study groups based on your courses or interests. Collaborate and share resources.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>✅</FeatureIcon>
            <FeatureTitle>Track Progress</FeatureTitle>
            <FeatureDescription>
              Set your study goals and track your progress with personalized goals and milestones.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>💬</FeatureIcon>
            <FeatureTitle>Real-Time Messaging</FeatureTitle>
            <FeatureDescription>
              Communicate with your group members in real time through the built-in chat feature.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesSection>
      </PageContainer>
      <Footer />
    </div>
  );
};

export default Home;
