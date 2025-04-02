// pages/study-groups.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    background-color: #005bb5;
  }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Heading = styled.h2`
  color: #333;
`;

const StudyGroupsPage = () => {
  const [groupName, setGroupName] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission for creating a group
  const handleCreateGroup = (e) => {
    e.preventDefault();
    if (groupName.trim()) {
      setMessage(`Group '${groupName}' has been created successfully!`);
      setGroupName('');
    } else {
      setMessage('Please enter a group name!');
    }
  };

  // Handle form submission for joining a group
  const handleJoinGroup = (e) => {
    e.preventDefault();
    if (joinCode.trim()) {
      setMessage(`Joined group with code: ${joinCode}`);
      setJoinCode('');
    } else {
      setMessage('Please enter a valid group code!');
    }
  };

  return (
    <div>
      <Navbar />
      <PageContainer>
        <Heading>Study Groups</Heading>
        <p>Create or join study groups with ease!</p>

        {/* Group Creation Form */}
        <FormContainer>
          <h3>Create a Group</h3>
          <form onSubmit={handleCreateGroup}>
            <Input
              type="text"
              placeholder="Enter group name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
            <Button type="submit">Create Group</Button>
          </form>
        </FormContainer>

        {/* Group Joining Form */}
        <FormContainer>
          <h3>Join a Group</h3>
          <form onSubmit={handleJoinGroup}>
            <Input
              type="text"
              placeholder="Enter group code"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value)}
            />
            <Button type="submit">Join Group</Button>
          </form>
        </FormContainer>

        {/* Message */}
        {message && <p>{message}</p>}
      </PageContainer>
      <Footer />
    </div>
  );
};

export default StudyGroupsPage;
