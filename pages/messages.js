// pages/messages.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
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
  overflow-y: auto;
`;

const MessageItem = styled.div`
  padding: 10px;
  color: black;
  background-color:rgb(249, 251, 250);
  border-radius: 10px;
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
    background-color: #0051a3;
  }
`;

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    setMessages([
      { id: 1, text: 'Welcome to the study group!' },
      { id: 2, text: 'Let’s focus on the assignment due next week.' }
    ]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages([...messages, { id: Date.now(), text: newMessage }]);
    setNewMessage('');
  };

  return (
    <>
      <Navbar />
      <PageContainer>
        <h1>Messages</h1>
        <MessagesContainer>
          {messages.map((msg) => (
            <MessageItem key={msg.id}>{msg.text}</MessageItem>
          ))}
        </MessagesContainer>
        <MessageForm onSubmit={handleSubmit}>
          <MessageInput
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <SendButton type="submit">Send</SendButton>
        </MessageForm>
      </PageContainer>
      <Footer />
    </>
  );
}