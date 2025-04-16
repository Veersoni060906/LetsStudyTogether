import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  padding: 40px;
`;

const StudyGroupTitle = styled.h1`
  color: ${(props) => props.theme.primary};
  text-align: center;
  margin-bottom: 30px;
`;

const GroupList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GroupItem = styled.div`
  background-color: ${(props) => props.theme.background === '#111111' ? '#222' : '#f9f9f9'};
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 8px 14px;
  background-color: ${(props) => props.theme.primary};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    opacity: 0.85;
  }
`;

const Form = styled.form`
  margin-bottom: 30px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 10px;
  flex: 1;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export default function StudyGroups() {
  const [groups, setGroups] = useState([
    { id: 1, name: 'Math Buddies', members: 5 },
    { id: 2, name: 'Science Explorers', members: 8 },
    { id: 3, name: 'History Geeks', members: 4 },
  ]);

  const [groupName, setGroupName] = useState('');

  const createGroup = (e) => {
    e.preventDefault();
    if (!groupName.trim()) return;

    const newGroup = {
      id: Date.now(),
      name: groupName.trim(),
      members: 1,
    };

    setGroups([newGroup, ...groups]);
    setGroupName('');
  };

  const joinGroup = (id) => {
    setGroups(groups.map((group) =>
      group.id === id ? { ...group, members: group.members + 1 } : group
    ));
  };

  return (
    <>
      <Navbar />
      <Container>
        <StudyGroupTitle>Study Groups</StudyGroupTitle>

        <Form onSubmit={createGroup}>
          <Input
            type="text"
            placeholder="Enter new group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <Button type="submit">Create Group</Button>
        </Form>

        <GroupList>
          {groups.map((group) => (
            <GroupItem key={group.id}>
              <h2>{group.name}</h2>
              <p>Members: {group.members}</p>
              <Button onClick={() => joinGroup(group.id)}>Join Group</Button>
            </GroupItem>
          ))}
        </GroupList>
      </Container>
      <Footer />
    </>
  );
}
