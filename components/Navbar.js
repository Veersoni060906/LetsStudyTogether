// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

// Styled-components for Navbar
const NavBarContainer = styled.nav`
  background-color:rgb(0, 0, 1);
  padding: 15px 0;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;  // Text color is now white
  font-size: 18px;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00;  // Optional: color changes to yellow on hover for better UX
  }
`;

const Navbar = () => {
  return (
    <NavBarContainer>
      <NavList>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/study-groups">Study Groups</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/messages">Messages</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/profile">Profile</NavLink>
        </NavItem>
      </NavList>
    </NavBarContainer>
  );
};

export default Navbar;
