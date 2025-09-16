import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1c1c1c;
  color: #888;
  text-align: center;
  padding: 1.5rem;
  border-top: 1px solid #444;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025 Matheus Vinicius Mariussi. Todos os direitos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;