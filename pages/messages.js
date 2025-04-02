// pages/messages.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
`;

const MessagesContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 400px;
  overflow-y: scroll;
`;

const MessageItem = styled.div`
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  max-width: 80%;
`;

const MessageForm = styled.form`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const MessageInput = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SendButton = styled.button`
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

const Heading = styled.h2`
  color: #333;
`;

const MessagesPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello, welcome to the study group!' },
    { id: 2, text: 'Hi, how is everyone doing today?' },
  ]); // Temporary static messages array

  // Handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: message }]);
      setMessage('');
    }
  };

  return (
    <div>
      <Navbar />
      <PageContainer>
        <Heading>Messages</Heading>
        <p>Chat with your study group members in real-time!</p>

        {/* Messages Container */}
        <MessagesContainer>
          {messages.map((msg) => (
            <MessageItem key={msg.id}>
              <p>{msg.text}</p>
            </MessageItem>
          ))}
        </MessagesContainer>

        {/* Send Message Form */}
        <MessageForm onSubmit={handleSendMessage}>
          <MessageInput
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <SendButton type="submit">Send</SendButton>
        </MessageForm>
      </PageContainer>
      <Footer />
    </div>
  );
};

export default MessagesPage;
