import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const HeaderContainer = styled.header`
  background-color: var(--turqois5); /* Gold */
  padding: 10px;
`;

const StyledNavLink = styled(NavLink)`

/* Remove bottom line */
text-decoration: none;

/* Define normal state styles */
color: var(--gold1); /* Normal color */

/* Define hover state styles */
&:hover {
  color: var(--gray1); /* Hover color */
}

/* Define active state styles */
&.active {
  color: var(gray3); /* Active color */
}
`;


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: var(--gold1); 
  font-size: 24px;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-left: 20px;
  color: var(--gold1);
`;

const Login = styled.div`
  
  color: var(--gold1);
  `;

const MainNav = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>My Logo</Logo>
        <Menu>
          <MenuItem><StyledNavLink to="/home">Home</StyledNavLink></MenuItem>
          <MenuItem><StyledNavLink to="/about">About</StyledNavLink></MenuItem>
          <MenuItem><StyledNavLink to="/services">Services</StyledNavLink></MenuItem>
          <MenuItem><StyledNavLink to="/contact">Contact</StyledNavLink></MenuItem>
          <MenuItem><StyledNavLink to="/login">Login</StyledNavLink></MenuItem>
        </Menu>
          
      </Nav>
    </HeaderContainer>
  );
}

export default MainNav;

