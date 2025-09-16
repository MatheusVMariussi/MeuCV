import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #1c1c1c;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #444;
`;

const NavLogo = styled.a`
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLogo href="#">Matheus V. Mariussi</NavLogo>
      <NavLinks>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#contact">Contato</a></li>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;