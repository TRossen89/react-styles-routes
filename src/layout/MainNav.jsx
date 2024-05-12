import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



const HeaderContainer = styled.header`
  background-color: #F0E68C; /* Gold */
  padding: 10px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: #4B0082; /* Indigo */
  font-size: 24px;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-left: 20px;
`;

;

const MainNav = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>My Logo</Logo>
        <Menu>
          <MenuItem><NavLink to="/home">Home</NavLink></MenuItem>
          <MenuItem><NavLink to="/about">About</NavLink></MenuItem>
          <MenuItem><NavLink to="/services">Services</NavLink></MenuItem>
          <MenuItem><NavLink to="/contact">Contact</NavLink></MenuItem>
        </Menu>
      </Nav>
    </HeaderContainer>
  );
}

export default MainNav;

