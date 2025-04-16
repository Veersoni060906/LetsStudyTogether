// components/Navbar.js
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  padding: 10px 20px;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Nav>
      <NavLinks>
        <Link href="/">Home</Link>
        <Link href="/messages">Messages</Link>
        <Link href="/progress">Progress</Link>
        <Link href="/study-groups">Study Groups</Link>
      </NavLinks>
      <button onClick={toggleTheme} style={{
        padding: '6px 12px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#fff',
        color: '#000',
        cursor: 'pointer'
      }}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </Nav>
  );
}